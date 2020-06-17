package com.badilovskii.kh

import com.badilovskii.kh.sla.Sla
import scala.concurrent.duration.FiniteDuration

case class Configuration(
    shutdownTimeout: FiniteDuration,
    responseTimeout: FiniteDuration,
    graceRps: Int,
    tokenRps: Map[String, Sla]
)
