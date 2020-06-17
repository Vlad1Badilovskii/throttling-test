package com.badilovskii.kh.throttling

import akka.actor.{ Actor, ActorLogging, ActorRef }
import akka.pattern.ask
import akka.util.Timeout
import com.badilovskii.kh.sla.Sla
import com.badilovskii.kh.sla.SlaService.GetSlaByToken
import scala.collection.mutable
import scala.concurrent.ExecutionContext
import scala.concurrent.duration._
import scala.util.{ Failure, Success }

class ThrottlingServiceImpl(val graceRps: Int, val slaService: ActorRef)
    extends ThrottlingService
    with Actor
    with ActorLogging
{

    implicit val ec: ExecutionContext = context.dispatcher

    val incognito = "Incognito"

    implicit val timeout: Timeout = Timeout(1 second)

    private val cashSla = mutable.Map[String, Sla]()
    private var counters = mutable.Map[String, Int]()
    private var startTime: Long = System.currentTimeMillis()

    override def receive: Receive = {
        case IsRequestAllowed(token) => sender() ! isRequestAllowed(token)
        case NullifyCounter => nullifyCounter()
    }

    def isRequestAllowed(token: Option[String]): Boolean = {
        token match {
            case Some(t) =>
                cashSla.get(t) match {
                    case Some(Sla(user, rps)) => isAllowed(user, rps)
                    case None =>
                        val slaFuture = slaService ? GetSlaByToken(t)
                        cashSla.put(t, Sla(incognito, graceRps))
                        slaFuture.mapTo[Sla].onComplete {
                            case Success(newSla) => cashSla.update(t, newSla)
                            case Failure(e) => log.error(e.getMessage)
                        }
                        isAllowed(incognito, cashSla(t).rps)
                }
            case None => isAllowed(incognito, graceRps)
        }
    }

    private def isAllowed(user: String, rps: Int): Boolean = {
        val count = counters.getOrElse(user, 0)
        val extraRps = if(System.currentTimeMillis() - startTime < 100 && count >= rps) rps/10 else 0

        if (count < rps + extraRps) {
            counters.put(user, count + 1)
            true
        } else false
    }

    private def nullifyCounter(): Unit = {
        counters = mutable.Map(counters.keySet.map(k => (k, 0)).toSeq: _*)
        startTime = System.currentTimeMillis()
    }
}
