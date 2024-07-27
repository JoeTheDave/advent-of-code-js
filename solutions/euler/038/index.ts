// Project Euler | Problem 38 | Pandigital Multiples
// https://projecteuler.net/problem=38

import { isPandigital } from '@/lib/analysis'

export const displayName = 'EULER | Problem 38 | Pandigital Multiples'
export const complete = true

export const solution = () => {
  let largestPandigitalProduct = 0
  for (let x = 1; x <= 9999; x++) {
    let panDigitalString = ''
    for (let p = 1; p <= 9; p++) {
      panDigitalString += x * p
      if (panDigitalString.length >= 9) {
        break
      }
    }
    if (isPandigital(panDigitalString)) {
      const pandigitalNumber = parseInt(panDigitalString)
      if (pandigitalNumber > largestPandigitalProduct) {
        largestPandigitalProduct = pandigitalNumber
      }
    }
  }
  return largestPandigitalProduct
}
