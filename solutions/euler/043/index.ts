// Project Euler | Problem 43 | Sub-string Divisibility
// https://projecteuler.net/problem=43

import { digitPermutator } from '@/lib/sequence'

export const displayName = 'EULER | Problem 43 | Sub-string Divisibility'
export const complete = true

export const solution = () => {
  const panditialList = digitPermutator(1234567890)
  const primesList = [2, 3, 5, 7, 11, 13, 17]
  const magicNumbers: number[] = []
  panditialList.forEach(num => {
    let isWinner = true
    for (let n = 1; n <= 7; n++) {
      if (parseInt(`${num}`.substring(n, n + 3)) % primesList[n - 1] !== 0) {
        isWinner = false
        break
      }
    }
    if (isWinner) {
      magicNumbers.push(num)
    }
  })
  return magicNumbers.reduce((sum, num) => sum + num, 0)
}
