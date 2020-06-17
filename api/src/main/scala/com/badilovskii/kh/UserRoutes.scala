package com.badilovskii.kh
import akka.actor.{ ActorRef, ActorSystem }
import akka.http.scaladsl.model.StatusCodes._
import akka.http.scaladsl.model.headers.Authorization
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import akka.pattern.ask
import akka.util.Timeout
import com.badilovskii.kh.throttling.IsRequestAllowed
import scala.concurrent.ExecutionContext
import scala.util.{ Failure, Success }

class UserRoutes(throttlingService: ActorRef)(implicit system: ActorSystem, ec: ExecutionContext, t: Timeout) {

    val route: Route =
        get {
            path("throttle") {
                optionalHeaderValueByName(Authorization.name) { token =>
                    onComplete((throttlingService ? IsRequestAllowed(token)).mapTo[Boolean]) {
                        case Success(true) => complete(OK)
                        case Success(false) => complete(PayloadTooLarge -> "To many requests, all workers is busy, please wait, your request is important for us")
                        case Failure(err) => complete(InternalServerError -> s"${err.getMessage}")
                    }
                }
            } ~
                path("no_throttle") {
                    complete(OK)
                }
        }
}
