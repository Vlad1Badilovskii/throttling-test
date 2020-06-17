import akka.actor.ActorSystem
import akka.pattern.ask
import akka.testkit.{ ImplicitSender, TestKit }
import akka.util.Timeout
import com.badilovskii.kh.sla.SlaService.GetSlaByToken
import com.badilovskii.kh.sla.{ Sla, SlaService }
import org.scalatest.BeforeAndAfterAll
import org.scalatest.concurrent.{ IntegrationPatience, ScalaFutures }
import org.scalatest.matchers.should.Matchers
import org.scalatest.wordspec.AnyWordSpecLike
import scala.concurrent.duration._

class SlaServiceSpec
    extends TestKit(ActorSystem("TestProbSpec"))
    with ImplicitSender
    with AnyWordSpecLike
    with BeforeAndAfterAll
    with Matchers
    with ScalaFutures
    with IntegrationPatience
{

    val token = "asd"
    implicit val t = Timeout(5 seconds)

    "Sla service" should {
        "return error if sla not found" in {
            val slaService = system.actorOf(SlaService.props())
            an[RuntimeException] shouldBe thrownBy ((slaService ? GetSlaByToken(token)).futureValue)
        }

        "return sla if data map contains token" in {
            val sla = Sla("Jhon", 22)
            val slaService = system.actorOf(SlaService.props(Map(token -> sla)))

            (slaService ? GetSlaByToken(token) futureValue) shouldBe sla
        }

    }

    override def afterAll(): Unit = TestKit.shutdownActorSystem(system)
}
