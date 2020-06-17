package com.badilovskii.kh.sla

import akka.actor.{ Actor, ActorLogging }
import com.badilovskii.kh.sla.SlaService.GetSlaByToken
import scala.concurrent.{ ExecutionContext, Future }
import akka.pattern.pipe
import scala.util.{ Failure, Success }

class SlaServiceImpl(val tokenRps: Map[String, Sla] = Map())
    extends SlaService
    with Actor
    with ActorLogging
{

    implicit val ec: ExecutionContext = context.dispatcher

    def getSlaByToken(token: String): Future[Sla] = Future.fromTry {
        Thread.sleep(250)
        tokenRps.get(token) match {
            case Some(value) => Success(value)
            case None => Failure(new RuntimeException("user not found"))
        }
    }

    override def receive: Receive = {
        case GetSlaByToken(token) => getSlaByToken(token).pipeTo(sender())
    }
}
