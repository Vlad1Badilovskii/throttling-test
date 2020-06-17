package com.badilovskii.kh

import akka.actor.{ Actor, ActorRef, Props }
import com.badilovskii.kh.throttling.NullifyCounter

object TimerActor {
    def props(throttler: ActorRef): Props = Props(new TimerActor(throttler))
}

class TimerActor(val throttler: ActorRef) extends Actor {
    def receive: Receive = {
        case NullifyCounter => throttler ! NullifyCounter
    }
}
