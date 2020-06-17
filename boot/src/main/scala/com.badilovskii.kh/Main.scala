package com.badilovskii.kh

import com.typesafe.scalalogging.LazyLogging

object Main extends App with LazyLogging{

    logger.info("Starting throttling test server...")

    WebServer.startServer("0.0.0.0", 9000)
}
