import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.model.headers.BasicHttpCredentials
import akka.http.scaladsl.testkit.ScalatestRouteTest
import akka.testkit.{ TestKit, TestProbe }
import akka.util.Timeout
import com.badilovskii.kh.UserRoutes
import com.badilovskii.kh.sla.SlaService.GetSlaByToken
import com.badilovskii.kh.throttling.ThrottlingService
import org.scalatest.BeforeAndAfterAll
import org.scalatest.matchers.should.Matchers
import org.scalatest.wordspec.AnyWordSpec
import scala.concurrent.duration._

class UserRoutesSpec
    extends AnyWordSpec
    with Matchers
    with ScalatestRouteTest
    with BeforeAndAfterAll {

    "UserRoutes" should {
        "return ok for unauthorized user" in new Scope {
            Get("/throttle") ~> route ~> check {
                status shouldEqual StatusCodes.OK
            }
        }

        "return ok for authorized user" in new Scope {
            Get("/throttle") ~> addCredentials(BasicHttpCredentials("valera_pupkin", "qwertyy")) ~> route ~> check {
                slaActor.expectMsg(5 seconds, GetSlaByToken("Basic dmFsZXJhX3B1cGtpbjpxd2VydHl5"))
                status shouldEqual StatusCodes.OK
            }
        }

        "return payloadToLarge for unauthorized user" in new Scope {
            override val throttler = system.actorOf(ThrottlingService.props(0, slaActor.ref))
            override val route = new UserRoutes(throttler).route

            Get("/throttle") ~> route ~> check {
                status shouldEqual StatusCodes.PayloadTooLarge
            }
        }
    }

    override def afterAll(): Unit = TestKit.shutdownActorSystem(system)

    trait Scope {
        implicit val t = Timeout(10 seconds)

        val slaActor = TestProbe("slaService")
        val throttler = system.actorOf(ThrottlingService.props(5, slaActor.ref))
        val route = new UserRoutes(throttler).route
    }
}
