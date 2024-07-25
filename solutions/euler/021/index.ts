// Project Euler | Problem 21 | Amicable Numbers
// https://projecteuler.net/problem=21

import { sumOfFactors } from '@/lib/mathUtils'

export const displayName = 'EULER | Problem 21 | Amicable Numbers'
export const complete = true

export const solution = () => {
  const amicable: number[] = []
  for (let n = 1; n < 10000; n++) {
    if (!amicable.includes(n)) {
      const sum = sumOfFactors(n)
      const amicableSum = sumOfFactors(sum)
      if (amicableSum === n && n !== sum) {
        amicable.push(n)
        amicable.push(sum)
      }
    }
  }

  return amicable.reduce((sum, num) => sum + num, 0)
}
