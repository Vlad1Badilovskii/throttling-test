package com.badilovskii.kh.throttling

sealed trait ThrottlingServiceMessage

case class IsRequestAllowed(token: Option[String]) extends ThrottlingServiceMessage
case object NullifyCounter extends ThrottlingServiceMessage
