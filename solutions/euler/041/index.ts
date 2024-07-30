// Project Euler | Problem 41 | Pandigital Prime
// https://projecteuler.net/problem=41

import { isPrime } from '@/lib/primes'
import { digitPermutator } from '@/lib/sequence'

export const displayName = 'EULER | Problem 41 | Pandigital Prime'
export const complete = true

export const solution = () => {
  let largestPandigitalPrime = 0
  let seed = ''
  '123456789'.split('').forEach(digit => {
    seed += digit
    const candidateList = digitPermutator(parseInt(seed))
    for (let c = 0; c < candidateList.length; c++) {
      const candidate = candidateList[c]
      if (candidate > largestPandigitalPrime && isPrime(candidate)) {
        largestPandigitalPrime = candidate
      }
    }
  })

  return largestPandigitalPrime
}
