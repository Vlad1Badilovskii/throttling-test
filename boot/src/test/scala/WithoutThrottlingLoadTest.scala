import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

class WithoutThrottlingLoadTest extends Simulation {

  val scn = scenario("No throttle")
    .exec(http("User without token")
        .get("http://0.0.0.0:9000/no_throttle")
    )

  setUp {
    scn.inject(constantUsersPerSec(100) during (10 seconds))
  }
}
