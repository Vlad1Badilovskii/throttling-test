import io.gatling.app.Gatling
import io.gatling.core.config.GatlingPropertiesBuilder

//Since Gatling plugin not working, this is simple solution to run the tests
object LoadTestsRunner extends App {
    val props = new GatlingPropertiesBuilder()
        .simulationClass("ThrottlingWithTokenLoadTest")
        .simulationClass("ThrottlingWithoutTokenLoadTest")
        .simulationClass("WithoutThrottlingLoadTest")

    Gatling.fromMap(props.build)
}
