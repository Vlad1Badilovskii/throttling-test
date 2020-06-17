package com.badilovskii.kh.sla

import akka.actor.Props
import scala.concurrent.Future

trait SlaService {
    def getSlaByToken(token: String): Future[Sla]
}

object SlaService {
    case class GetSlaByToken(token: String)
    def props(tokenStorage: Map[String, Sla] = Map.empty): Props = Props(new SlaServiceImpl(tokenStorage))
}
