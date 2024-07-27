// Project Euler | Problem 32 | Pandigital Products
// https://projecteuler.net/problem=32

import { isPandigital } from '@/lib/analysis'

export const displayName = 'EULER | Problem 32 | Pandigital Products'
export const complete = true

export const solution = () => {
  const products: { [key: number]: boolean } = {}
  for (let a = 1; a <= 2000; a++) {
    for (let b = 1; b <= a; b++) {
      const p = a * b
      const signature = `${a}${b}${p}`
      if (signature.length === 9 && isPandigital(signature)) {
        products[p] = true
      }
    }
  }
  return Object.keys(products).reduce((sum, num) => sum + parseInt(num), 0)
}
