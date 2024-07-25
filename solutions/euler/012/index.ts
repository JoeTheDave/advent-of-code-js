// Project Euler | Problem 12 | Highly Divisible Triangular Number
// https://projecteuler.net/problem=12

import { getFactors } from '@/lib/mathUtils'

export const displayName =
  'EULER | Problem 12 | Highly Divisible Triangular Number'
export const complete = true

export const solution = () => {
  let triangleBase = 0
  let currentTriangleNumber = 0
  let divisorCount = 0
  do {
    triangleBase++
    currentTriangleNumber += triangleBase
    const divisors = getFactors(currentTriangleNumber)
    divisorCount = Math.max(divisorCount, divisors.length)
  } while (divisorCount < 500)

  return currentTriangleNumber
}
