// Project Euler | Problem 10 | Summation of Primes
// https://projecteuler.net/problem=10

import { nextPrime } from '@/lib/primes'

export const displayName = 'EULER | Problem 10 | Summation of Primes'
export const complete = true

export const solution = () => {
  const twoMillion = 2000000
  const primes = [2]
  while (primes[primes.length - 1] < twoMillion) {
    primes.push(nextPrime(primes[primes.length - 1]))
  }
  return primes.slice(0, -1).reduce((sum, num) => sum + num, 0)
}
