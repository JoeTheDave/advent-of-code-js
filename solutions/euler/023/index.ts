// Project Euler | Problem 23 | Non-Abundant Sums
// https://projecteuler.net/problem=23

import { sumOfFactors } from '@/lib/mathUtils'

export const displayName = 'EULER | Problem 23 | Non-Abundant Sums'
export const complete = true

const maxNumber = 28123

export const solution = () => {
  const abundantNums = []
  for (let n = 10; n <= maxNumber; n++) {
    const sum = sumOfFactors(n)
    if (sum > n) {
      abundantNums.push(n)
    }
  }

  const abundantSums: { [key: number]: number } = {}
  for (let a = 0; a < abundantNums.length; a++) {
    for (let b = 0; b <= a; b++) {
      const sum = abundantNums[a] + abundantNums[b]
      if (sum <= maxNumber) {
        abundantSums[sum] = 1
      }
    }
  }

  let nonAbundantSums = []
  for (let x = 1; x <= maxNumber; x++) {
    if (!abundantSums[x]) {
      nonAbundantSums.push(x)
    }
  }

  return nonAbundantSums.reduce((sum, num) => sum + num, 0)
}
