package com.badilovskii.kh

import akka.actor.ActorSystem
import akka.util.Timeout
import com.badilovskii.kh.sla.SlaService
import com.badilovskii.kh.throttling.ThrottlingService
import scala.concurrent.ExecutionContext

class Services(config: Configuration)(implicit ec: ExecutionContext, system: ActorSystem, t: Timeout) {
    private val slaService = system.actorOf(SlaService.props(config.tokenRps))
    val throttlingService = system.actorOf(ThrottlingService.props(config.graceRps, slaService))
    val timer = system.actorOf(TimerActor.props(throttlingService), "timer")
}
