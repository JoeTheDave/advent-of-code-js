// Project Euler | Problem 7 | 10001st Prime
// https://projecteuler.net/problem=7

import { nextPrime } from '@/lib/primes'

export const displayName = 'EULER | Problem 7 | 10001st Prime'
export const complete = true

export const solution = () => {
  let prime = 0
  for (let i = 1; i <= 10001; i++) {
    prime = nextPrime(prime)
  }
  return prime
}
