import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class ThrottlingWithoutTokenLoadTest
    extends Simulation {
    setUp {
        scenario("Throttling")
            .exec(http("User without token")
                .get("http://0.0.0.0:9000/throttle"))
            .inject(constantUsersPerSec(100) during (10 seconds))
    }
}
