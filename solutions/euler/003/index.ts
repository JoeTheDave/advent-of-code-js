// Project Euler | Problem 3 | Largest Prime Factor
// https://projecteuler.net/problem=3

import { getPrimeFactors } from '@/lib/primes'

export const displayName = 'EULER | Problem 3 | Largest Prime Factor'
export const complete = true

export const solution = () => {
  const product = 600851475143
  const primeFactors = getPrimeFactors(product)
  return Math.max(...primeFactors)
}
