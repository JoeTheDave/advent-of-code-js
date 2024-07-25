// Project Euler | Problem 2 | Even Fibonacci Numbers
// https://projecteuler.net/problem=2

import { getFibonacciSequence } from '@/lib/sequence'

export const displayName = 'EULER | Problem 2 | Even Fibonacci Numbers'
export const complete = true

export const solution = () => {
  const fourMillion = 4000000
  const fibonacci = getFibonacciSequence(fourMillion)
  return fibonacci.filter(n => n % 2 === 0).reduce((sum, num) => sum + num, 0)
}
