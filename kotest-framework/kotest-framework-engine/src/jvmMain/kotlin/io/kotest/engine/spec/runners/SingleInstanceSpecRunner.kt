package io.kotest.engine.spec.runners

import io.kotest.common.ExperimentalKotest
import io.kotest.common.flatMap
import io.kotest.core.concurrency.CoroutineDispatcherFactory
import io.kotest.core.config.Configuration
import io.kotest.core.spec.Spec
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestResult
import io.kotest.engine.listener.TestEngineListener
import io.kotest.engine.spec.SpecExtensions
import io.kotest.engine.spec.SpecRunner
import io.kotest.engine.test.TestCaseExecutor
import io.kotest.engine.test.listener.TestCaseExecutionListenerToTestEngineListenerAdapter
import io.kotest.engine.test.scheduler.TestScheduler
import io.kotest.mpp.Logger
import io.kotest.mpp.bestName
import kotlinx.coroutines.coroutineScope
import java.util.concurrent.ConcurrentHashMap
import kotlin.coroutines.CoroutineContext

/**
 * Implementation of [SpecRunner] that executes all tests against the
 * same [Spec] instance. In other words, only a single instance of the spec class
 * is instantiated for all the test cases.
 */
@ExperimentalKotest
internal class SingleInstanceSpecRunner(
   listener: TestEngineListener,
   scheduler: TestScheduler,
   private val defaultCoroutineDispatcherFactory: CoroutineDispatcherFactory,
   private val configuration: Configuration,
) : SpecRunner(listener, scheduler, configuration) {

   private val results = ConcurrentHashMap<TestCase, TestResult>()
   private val extensions = SpecExtensions(configuration.registry())
   private val logger = Logger(SingleInstanceSpecRunner::class)

   override suspend fun execute(spec: Spec): Result<Map<TestCase, TestResult>> {
      logger.log { Pair(spec::class.bestName(), "executing spec $spec") }

      suspend fun interceptAndRun(context: CoroutineContext) = kotlin.runCatching {
         val rootTests = materializer.materialize(spec)
         logger.log { Pair(spec::class.bestName(), "Materialized root tests: ${rootTests.size}") }
         launch(spec) {
            logger.log { Pair(it.name.testName, "Executing test $it") }
            runTest(it, context)
         }
      }

      try {
         return coroutineScope {
            extensions.beforeSpec(spec)
               .flatMap { interceptAndRun(coroutineContext) }
               .flatMap { SpecExtensions(configuration.registry()).afterSpec(spec) }
               .map { results }
         }
      } catch (e: Exception) {
         e.printStackTrace()
         throw e
      }
   }

   private suspend fun runTest(
      testCase: TestCase,
      coroutineContext: CoroutineContext,
   ): TestResult {

      val testExecutor = TestCaseExecutor(
         TestCaseExecutionListenerToTestEngineListenerAdapter(listener),
         defaultCoroutineDispatcherFactory,
         configuration,
      )

//      val scope = DuplicateNameHandlingTestScope(
//         configuration.duplicateTestNameMode,
//         Context(testCase, coroutineContext)
//      )

//      logger.log { Pair(testCase.name.testName, "Nested test case discovered '${nested}") }
//
//      val nestedTestCase = Materializer(configuration).materialize(nested, testCase)
//      if (failedfast) {
//         logger.log { Pair(testCase.name.testName, "Skipping test due to fail fast") }
//         listener.testIgnored(nestedTestCase, "Failfast enabled on parent test")
//      } else {
      //   // if running this nested test results in an error, we won't launch anymore nested tests
//         val result = runTest(nestedTestCase, coroutineContext)
//         if (testCase.config.failfast) {
//            if (result.isErrorOrFailure) {
//               logger.log { Pair(testCase.name.testName, "Test failed - setting failedfast=true") }
//               failedfast = true
//            }
//         }
//      }

      val result = testExecutor.execute(testCase)
      results[testCase] = result
      return result
   }
}
