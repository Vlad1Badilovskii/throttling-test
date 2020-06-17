package com.badilovskii.kh.throttling

import akka.actor.{ ActorRef, Props }

trait ThrottlingService {
    val graceRps:Int
    val slaService: ActorRef

    def isRequestAllowed(token:Option[String]): Boolean
}

object ThrottlingService {
    def props(graceRps: Int, slaService: ActorRef): Props = Props(new ThrottlingServiceImpl(graceRps, slaService))
}
