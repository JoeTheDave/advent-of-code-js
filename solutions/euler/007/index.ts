// Project Euler | Problem 7 | 10001st Prime
// https://projecteuler.net/problem=7

import { PrimeGenerator } from '@/lib/primes'

export const displayName = 'EULER | Problem 7 | 10001st Prime'
export const complete = true

export const solution = () => {
  const generator = new PrimeGenerator()
  for (let i = 1; i <= 10001; i++) {
    generator.getNext()
  }
  return generator.getCurrent()
}
