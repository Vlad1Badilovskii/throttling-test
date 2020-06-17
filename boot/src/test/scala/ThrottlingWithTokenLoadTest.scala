import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

class ThrottlingWithTokenLoadTest extends Simulation {
    setUp {
        val scn = scenario("Throttling")
            .exec(
                http("User with token")
                    .get("http://0.0.0.0:9000/throttle")
                    .basicAuth("valera_pupkin", "qwertyy")
            )

        scn.inject(constantUsersPerSec(100) during (10 seconds))
    }
}
