import akka.actor.ActorSystem
import akka.pattern.ask
import akka.testkit.{ ImplicitSender, TestKit, TestProbe }
import akka.util.Timeout
import com.badilovskii.kh.sla.Sla
import com.badilovskii.kh.sla.SlaService.GetSlaByToken
import com.badilovskii.kh.throttling.{ IsRequestAllowed, ThrottlingService }
import org.scalatest.BeforeAndAfterAll
import org.scalatest.concurrent.{ IntegrationPatience, ScalaFutures }
import org.scalatest.matchers.should.Matchers
import org.scalatest.wordspec.AnyWordSpecLike
import scala.concurrent.duration._

class ThrottlingServiceSpec
    extends TestKit(ActorSystem("TestProbSpec"))
        with ImplicitSender
        with AnyWordSpecLike
        with BeforeAndAfterAll
        with Matchers
        with ScalaFutures
        with IntegrationPatience
{
        implicit val t = Timeout(5 seconds)

        "Throttling service" should {
            "return true if token is present" in new Scope {
                val isRequestAllowed = throttleService ? IsRequestAllowed(Some(token))

                slaService.expectMsg(GetSlaByToken(token))
                slaService.reply(Sla("Jhon", 12))

                isRequestAllowed.futureValue shouldBe true
            }

            "return true if token is absent" in new Scope {
                val isRequestAllowed = throttleService ? IsRequestAllowed(Some(token))

                slaService.expectMsg(GetSlaByToken(token))
                slaService.reply(new RuntimeException)

                isRequestAllowed.futureValue shouldBe true
            }

            "return false if token is present and rps is 0" in new Scope {
                override val throttleService = system.actorOf(ThrottlingService.props(0, slaService.ref))
                val isRequestAllowed = throttleService ? IsRequestAllowed(Some(token))

                slaService.expectMsg(GetSlaByToken(token))
                slaService.reply(Sla("Jhon", 0))

                isRequestAllowed.futureValue shouldBe false
            }
        }

        trait Scope {
            val token = "asd"
            val slaService = TestProbe("slaService")
            val throttleService = system.actorOf(ThrottlingService.props(5, slaService.ref))
        }

        override def afterAll(): Unit = TestKit.shutdownActorSystem(system)
}
