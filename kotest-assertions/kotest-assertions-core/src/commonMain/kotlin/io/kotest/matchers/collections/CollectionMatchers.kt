package io.kotest.matchers.collections

import io.kotest.assertions.ErrorCollectionMode
import io.kotest.assertions.errorCollector
import io.kotest.assertions.print.print
import io.kotest.assertions.runWithMode
import io.kotest.matchers.Matcher
import io.kotest.matchers.MatcherResult
import io.kotest.matchers.neverNullMatcher

fun <T> existInOrder(vararg ps: (T) -> Boolean): Matcher<Collection<T>?> = existInOrder(ps.asList())

/**
 * Assert that a collections contains a subsequence that matches the given subsequence of predicates, possibly with
 * values in between.
 */
fun <T> existInOrder(predicates: List<(T) -> Boolean>): Matcher<Collection<T>?> = neverNullMatcher { actual ->
   require(predicates.isNotEmpty()) { "predicates must not be empty" }

   var subsequenceIndex = 0
   val actualIterator = actual.iterator()

   while (actualIterator.hasNext() && subsequenceIndex < predicates.size) {
      if (predicates[subsequenceIndex](actualIterator.next())) subsequenceIndex += 1
   }

   MatcherResult(
      subsequenceIndex == predicates.size,
      { "${actual.print().value} did not match the predicates ${predicates.print().value} in order" },
      { "${actual.print().value} should not match the predicates ${predicates.print().value} in order" }
   )
}

fun <T> haveSize(size: Int): Matcher<Collection<T>> = haveSizeMatcher(size)

fun <T> singleElement(t: T): Matcher<Collection<T>> = object : Matcher<Collection<T>> {
   override fun test(value: Collection<T>) = MatcherResult(
      value.size == 1 && value.first() == t,
      { "Collection should be a single element of $t but has ${value.size} elements: ${value.print().value}" },
      { "Collection should not be a single element of $t" }
   )
}

fun <T> singleElement(p: (T) -> Boolean): Matcher<Collection<T>> = object : Matcher<Collection<T>> {
   override fun test(value: Collection<T>): MatcherResult {
      val filteredValue: List<T> = value.filter(p)
      return MatcherResult(
         filteredValue.size == 1,
         { "Collection should have a single element by a given predicate but has ${filteredValue.size} elements: ${value.print().value}" },
         { "Collection should not have a single element by a given predicate" }
      )
   }
}

fun <T : Comparable<T>> beSorted(): Matcher<List<T>> = sorted()
fun <T : Comparable<T>> sorted(): Matcher<List<T>> = object : Matcher<List<T>> {
   override fun test(value: List<T>): MatcherResult {
      val failure = value.withIndex().firstOrNull { (i, it) -> i != value.lastIndex && it > value[i + 1] }
      val elementMessage = when (failure) {
         null -> ""
         else -> ". Element ${failure.value} at index ${failure.index} was greater than element ${value[failure.index + 1]}"
      }
      return MatcherResult(
         failure == null,
         { "List ${value.print().value} should be sorted$elementMessage" },
         { "List ${value.print().value} should not be sorted" }
      )
   }
}

fun <T> matchEach(vararg fns: (T) -> Unit): Matcher<Collection<T>?> = matchEach(fns.asList())
fun <T> matchInOrder(vararg fns: (T) -> Unit): Matcher<Collection<T>?> = matchInOrder(fns.asList())
fun <T> matchInOrderSubset(vararg fns: (T) -> Unit): Matcher<Collection<T>?> = matchInOrderSubset(fns.asList())

/**
 * Assert that a collection contains a subsequence that matches the given subsequence of assertions, possibly with
 * values in between.
 */
fun <T> matchInOrder(assertions: List<(T) -> Unit>): Matcher<Collection<T>?> = neverNullMatcher { actual ->
   require(assertions.isNotEmpty()) { "assertions must not be empty" }

   var subsequenceIndex = 0
   val actualIterator = actual.iterator()

   errorCollector.runWithMode(ErrorCollectionMode.Hard) {
      while (actualIterator.hasNext() && subsequenceIndex < assertions.size) {
         if (runCatching { assertions[subsequenceIndex](actualIterator.next()) }.isSuccess) subsequenceIndex += 1
      }
   }

   MatcherResult(
      subsequenceIndex == assertions.size,
      { "${actual.print().value} did not match the assertions in order" },
      { "${actual.print().value} should not match the assertions in order" }
   )
}

/**
 * Assert that a collection contains a subsequence that matches the given subsequence of assertions, with NO
 * values in between.
 */
fun <T> matchInOrderSubset(assertions: List<(T) -> Unit>): Matcher<Collection<T>?> = neverNullMatcher { actual ->
   val originalMode = errorCollector.getCollectionMode()
   try {
      data class MatchInOrderSubsetProblem(
         val atIndex: Int,
         val problem: String,
      )

      data class MatchInOrderSubsetResult(
         val startIndex: Int,
         val elementsPassed: Int,
         val problems: List<MatchInOrderSubsetProblem>
      )

      val actualAsList = actual.toList()

      var allPassed = false
      var bestResult: MatchInOrderSubsetResult? = null

      for (startIndex in 0..(actual.size - assertions.size)) {
         var elementsPassed = 0
         var elementsTested = 0
         val currentProblems = ArrayList<MatchInOrderSubsetProblem>()

         while (true) {
            val elementResult = runCatching {
               assertions[elementsPassed](actualAsList[startIndex + elementsTested])
            }

            if (elementResult.isSuccess) {
               elementsPassed++
               currentProblems.clear()
               if (elementsPassed == assertions.size) {
                  allPassed = true
                  break
               }
            } else {
               currentProblems.add(
                  MatchInOrderSubsetProblem(
                     startIndex + elementsTested,
                     elementResult.exceptionOrNull()!!.message!!
                  )
               )
            }

            elementsTested++
            if (startIndex + elementsTested >= actual.size) {
               if (bestResult == null || elementsPassed > bestResult.elementsPassed) {
                  bestResult = MatchInOrderSubsetResult(startIndex, elementsPassed, currentProblems)
               }
               break
            }
         }

         if (allPassed) break
      }

      MatcherResult(
         allPassed,
         {
            """
            |Expected all elements to pass the assertions, possibly with gaps between but failed to match all assertions
            |
            |Best result when comparing from index [${bestResult?.startIndex}], where ${bestResult?.elementsPassed} elements passed, but the following errors occurred:
            |
            ${
               bestResult?.problems?.joinToString("\n") { problem ->
                  "|- [${problem.atIndex}]: ${problem.problem}"
               }
            }
            """.trimMargin()
         },
         { "Expected some assertion to fail but all passed" }
      )
   } finally {
      errorCollector.setCollectionMode(originalMode)
   }
}

/**
 * Asserts that each element in the collection matches its corresponding matcher in [assertions].
 * Elements will be compared sequentially in the order given by the iterators of the collections.
 */
fun <T> matchEach(assertions: List<(T) -> Unit>): Matcher<Collection<T>?> = neverNullMatcher { actual ->
   data class ElementPass(val atIndex: Int)
   data class MatchEachProblem(val atIndex: Int, val problem: String?)

   val problems = errorCollector.runWithMode(ErrorCollectionMode.Hard) {
      actual.mapIndexedNotNull { index, element ->
         runCatching {
            assertions[index](element)
         }.exceptionOrNull()?.let { exception ->
            MatchEachProblem(index, exception.message)
         }
      }
   } + (actual.size..assertions.size - 1).map {
      MatchEachProblem(
         it,
         "No actual element for assertion at index $it"
      )
   }

   MatcherResult(
      problems.isEmpty(),
      {
         "Expected each element to pass its assertion, but found issues at indexes: [${problems.joinToString { it.atIndex.toString() }}]\n\n" +
            "${problems.joinToString(separator = "\n") { "- [${it.atIndex}]: ${it.problem}" }}"
      },
      { "Expected some element to fail its assertion, but all passed." },
   )
}
