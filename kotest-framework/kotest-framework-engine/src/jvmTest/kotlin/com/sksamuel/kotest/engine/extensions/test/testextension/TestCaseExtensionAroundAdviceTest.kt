package com.sksamuel.kotest.engine.extensions.test.testextension

import io.kotest.core.extensions.TestCaseExtension
import io.kotest.core.spec.style.StringSpec
import io.kotest.core.test.Enabled
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestResult
import io.kotest.engine.test.toTestResult
import kotlin.time.Duration.Companion.milliseconds

// this tests that we can manipulate the result of a test case from an extension
class TestCaseExtensionAroundAdviceTest : StringSpec() {
   object MyExt : TestCaseExtension {
      override suspend fun intercept(testCase: TestCase, execute: suspend (TestCase) -> TestResult): TestResult {
         return when (testCase.descriptor.id.value) {
            "test1" -> TestResult.Ignored
            "test2" ->
               when (execute(testCase)) {
                  is TestResult.Error, is TestResult.Failure -> TestResult.Success(0.milliseconds)
                  else -> AssertionError("boom").toTestResult(0.milliseconds)
               }
            "test3" -> execute(testCase.copy(config = testCase.config.copy(enabled = { Enabled.disabled })))
            else -> execute(testCase)
         }
      }
   }

   override fun extensions() = listOf(MyExt)

   init {

      // this exception should not be thrown as the extension will skip evaluation of the test
      "test1" {
         throw RuntimeException()
      }
      // this exception will be thrown but then the test extension will override the failed result to return a success
      "test2" {
         throw RuntimeException()
      }
      // config for this test should be overriden so that the test is actually disabled, and therefore the exception will not be thrown
      "test3".config(enabled = true) {
         throw RuntimeException()
      }
   }
}
