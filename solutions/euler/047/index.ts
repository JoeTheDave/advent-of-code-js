// Project Euler | Problem 47 | Distinct Primes Factors
// https://projecteuler.net/problem=47

import { uniq } from 'lodash'
import { getPrimeFactors } from '@/lib/primes'

export const displayName = 'EULER | Problem 47 | Distinct Primes Factors'
export const complete = true

export const solution = () => {
  const targetCount = 4
  let targetNumbers: number[] = []
  let i = 0
  while (targetNumbers.length < targetCount) {
    i++
    const primeFactors = uniq(getPrimeFactors(i))
    if (primeFactors.length === targetCount) {
      targetNumbers.push(i)
    } else {
      targetNumbers = []
    }
  }

  return targetNumbers[0]
}
