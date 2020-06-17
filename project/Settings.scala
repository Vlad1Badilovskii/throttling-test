import Dependencies._
import sbt.Keys.{scalacOptions, _}
import sbt._
import sbt.util.Level

object Settings {
    val ScalaVersion = "2.12.8"

    val commonSettings = {
        Seq(
            organization := "badilovskii.kh",
            scalaVersion := ScalaVersion,
            scalacOptions := Seq(
                "-deprecation",                      // Emit warning and location for usages of deprecated APIs.
                "-encoding", "utf-8",                // Specify character encoding used by source files.
                "-explaintypes",                     // Explain type errors in more detail.
                "-feature",                          // Emit warning and location for usages of features that should be imported explicitly.
                "-unchecked",                        // Enable additional warnings where generated code depends on assumptions.
                "-language:postfixOps",              // Enable postfix operations
                "-Xcheckinit",                       // Wrap field accessors to throw an exception on uninitialized access.
                "-Xfatal-warnings",                  // Fail the compilation if there are any warnings.
                "-Xlint:adapted-args",               // Warn if an argument list is modified to match the receiver.
                "-Xlint:constant",                   // Evaluation of a constant arithmetic expression results in an error.
                "-Xlint:inaccessible",               // Warn about inaccessible types in method signatures.
                "-Xlint:infer-any",                  // Warn when a type argument is inferred to be `Any`.
                "-Xlint:missing-interpolator",       // A string literal appears to be missing an interpolator id.
                "-Xlint:nullary-override",           // Warn when non-nullary `def f()' overrides nullary `def f'.
                "-Xlint:package-object-classes",     // Class or object defined in package object.
                "-Xlint:poly-implicit-overload",     // Parameterized overloaded implicit methods are not visible as view bounds.
                "-Xlint:private-shadow",             // A private field (or class parameter) shadows a superclass field.
                "-Xlint:stars-align",                // Pattern sequence wildcard must align with sequence component.
                "-Xlint:type-parameter-shadow"       // A local type parameter shadows a type already in scope.
            ),
            javacOptions ++= Seq("-g", "-source", "1.8", "-target", "1.8", "-encoding", "UTF-8"),
            logLevel := Level.Info,
            version := (version in ThisBuild).value
        )
    }

    val commonDependencies = Seq(logback, logstash, slf4j, scalaLogging, scalaTest % Test, mockito % Test, gatling % Test, gatlingCharts % Test)

    val serviceDependencies = Seq(akkaStream, akkaTestKit % Test) ++ commonDependencies

    val apiDependencies = Seq(akkaHttp, akkaHttpTestKit % Test, akkaStreamTestKit % Test) ++ commonDependencies

    val bootDependencies = Seq(pureConfig) ++ commonDependencies
}
