// Project Euler | Problem 20 | Factorial Digit Sum
// https://projecteuler.net/problem=20

import { factorial } from '@/lib/mathUtils'

export const displayName = 'EULER | Problem 20 | Factorial Digit Sum'
export const complete = true

export const solution = () => {
  return factorial(100)
    .split('')
    .reduce((sum, num) => sum + parseInt(num), 0)
}
