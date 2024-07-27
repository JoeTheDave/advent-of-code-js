// Project Euler | Problem 10 | Summation of Primes
// https://projecteuler.net/problem=10

import { PrimeGenerator } from '@/lib/primes'

export const displayName = 'EULER | Problem 10 | Summation of Primes'
export const complete = true

export const solution = () => {
  const twoMillion = 2000000
  const generator = new PrimeGenerator()
  while (generator.getCurrent() < twoMillion) {
    generator.getNext()
  }
  return generator
    .getCurrentList()
    .slice(0, -1)
    .reduce((sum, num) => sum + num, 0)
}
