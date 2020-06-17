import sbt._

object Dependencies {
    val akkaStream = "com.typesafe.akka" %% "akka-stream" % Version.akka
    val akkaHttp = "com.typesafe.akka" %% "akka-http" % Version.akkaHttp

    val logback = "ch.qos.logback" % "logback-classic" % Version.logback
    val logstash = "net.logstash.logback" % "logstash-logback-encoder" % Version.logstash
    val slf4j = "com.typesafe.akka" %% "akka-slf4j" % Version.akka

    val scalaLogging = "com.typesafe.scala-logging" %% "scala-logging" % Version.scalaLogging

    val mockito = "org.mockito" %% "mockito-scala" % Version.mockito
    val scalaTest = "org.scalatest" %% "scalatest" % Version.scalaTest
    val akkaHttpTestKit = "com.typesafe.akka" %% "akka-http-testkit" % Version.akkaHttp
    val akkaStreamTestKit = "com.typesafe.akka" %% "akka-stream-testkit" % Version.akka

    val akkaTestKit = "com.typesafe.akka" %% "akka-testkit" % Version.akka

    val gatlingCharts = "io.gatling.highcharts" % "gatling-charts-highcharts" % Version.gatling
    val gatling = ("io.gatling" % "gatling-test-framework" % Version.gatling)
        .exclude("com.typesafe.akka", "akka-actor_2.12")
        .exclude("org.scala-lang.modules", "scala-xml_2.12")
        .exclude("org.scala-lang.modules", "scala-java8-compat_2.12")
        .exclude("com.typesafe.scala-logging", "scala-logging_2.12")
        .exclude("org.scala-lang.modules", "scala-parser-combinators_2.12")

    val pureConfig = "com.github.pureconfig" %% "pureconfig" % Version.pureConfig
}

object Version {
    val akka = "2.6.6"
    val akkaHttp = "10.1.11"
    val logback = "1.2.3"
    val logstash = "4.11"
    val scalaTest = "3.1.1"
    val mockito = "1.5.16"
    val slf4j = "1.7.25"
    val pureConfig = "0.11.1"
    val scalaLogging = "3.9.2"
    val gatling = "3.3.1"
}
