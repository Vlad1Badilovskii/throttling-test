package com.badilovskii.kh

import akka.Done
import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.server.{ HttpApp, Route }
import akka.util.Timeout
import com.badilovskii.kh.throttling.NullifyCounter
import pureconfig._
import pureconfig.generic.auto._
import scala.concurrent.Await
import scala.language.implicitConversions
import scala.util.Try
import scala.concurrent.duration._

object WebServer extends HttpApp {
    private val serviceName = "throttling-test"
    private val config = loadConfigOrThrow[Configuration](serviceName)

    implicit val system = ActorSystem(serviceName)
    implicit val ec = system.dispatcher
    implicit val timeout = Timeout(config.responseTimeout)

    val services = new Services(config)
    system.scheduler.scheduleWithFixedDelay(0 second, 1 second, services.timer, NullifyCounter)

    protected def routes: Route = new UserRoutes(services.throttlingService).route

    override def startServer(host: String, port: Int): Unit = super.startServer(host, port, system)

    //graceful shutdown
    override def postServerShutdown(attempt: Try[Done], actorSystem: ActorSystem): Unit = {
        super.postServerShutdown(attempt, actorSystem)

        Await.result(Http().shutdownAllConnectionPools(), config.shutdownTimeout)
        Await.result(system.terminate(), config.shutdownTimeout)
    }
}
