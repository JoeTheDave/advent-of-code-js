// Project Euler | Problem 10 | Summation of Primes
// https://projecteuler.net/problem=10

import { nextPrime } from '@/lib/primes'

export const displayName = 'EULER | Problem 10 | Summation of Primes'
export const complete = true

export const solution = () => {
  const twoMillion = 2000000
  let prime = 2
  let sum = 0
  while (prime < twoMillion) {
    sum += prime
    prime = nextPrime(prime)
  }
  return sum
}
