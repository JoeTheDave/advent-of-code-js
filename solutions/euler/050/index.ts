// Project Euler | Problem 50 | Consecutive Prime Sum
// https://projecteuler.net/problem=50

import { range } from 'lodash'
import { nextPrime } from '@/lib/primes'

export const displayName = 'EULER | Problem 50 | Consecutive Prime Sum'
export const complete = true

// Note: This solution, although producing the correct answer, is less than ideal as it takes over 4 minutes to
// run through to completion.  Using this top down approach, the correct answer is found in just over a
// second, but the solution does not know that it has found the correct answer without running through the entire
// remainder of the algorithm.
// Apart from injecting some early exit condition based on foreknowledge of the correct answer, I have not yet
// discovered a way to shorten the run time.

export const solution = () => {
  const oneMillion = 1000000
  let primes = [2]
  while (primes[primes.length - 1] < oneMillion) {
    primes.push(nextPrime(primes[primes.length - 1]))
  }
  primes = primes.slice(0, -1)
  let longestLength = 0
  let winningPrime = 0

  for (let primeIdx = primes.length - 1; primeIdx >= 10; primeIdx--) {
    // if (primeIdx % 100 === 0) {
    //   console.log(`${primeIdx} - ${primes[primeIdx]}`)
    // }
    let upperIdx = primeIdx - 1
    let lowerIdx = upperIdx
    let longestUpper = upperIdx
    let longestLower = lowerIdx
    let exitCondition = false
    const getRange = () => range(lowerIdx, upperIdx + 1)
    const getConsecutiveSum = () => getRange().reduce((sum, idx) => sum + primes[idx], 0)
    let primeConsecutiveSum = getConsecutiveSum()
    while (!exitCondition) {
      if (primeConsecutiveSum <= primes[primeIdx]) {
        lowerIdx--
      } else {
        upperIdx--
      }
      primeConsecutiveSum = getConsecutiveSum()
      if (primeConsecutiveSum === primes[primeIdx] && upperIdx - lowerIdx > longestUpper - longestLower) {
        longestUpper = upperIdx
        longestLower = lowerIdx
      }
      exitCondition = lowerIdx === 0 && primeConsecutiveSum <= primes[primeIdx]
    }
    if (longestUpper - longestLower > longestLength) {
      longestLength = longestUpper - longestLower
      winningPrime = primes[primeIdx]
      // console.log('*************************************************')
      // console.log(`${winningPrime} - ${longestLength}`)
      // console.log('*************************************************')
    }

    // This is the early exit code based on foreknowledge of the correct answer
    // if (longestLength === 542) {
    //   break
    // }
  }
  return winningPrime
}
