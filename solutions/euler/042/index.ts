// Project Euler | Problem 42 | Coded Triangle Numbers
// https://projecteuler.net/problem=42

import { readFileSync } from 'fs'
import { generateWordScore } from '@/lib/analysis'

export const displayName = 'EULER | Problem 42 | Coded Triangle Numbers'
export const complete = true

export const solution = () => {
  const triangleNumbers: { [key: number]: boolean } = {}
  for (let x = 1; x <= 20; x++) {
    const tn = 0.5 * x * (x + 1)
    triangleNumbers[tn] = true
  }

  const triangleWordsCount = readFileSync(`${__dirname}/words.txt`, 'utf8')
    .split(',')
    .reduce((sum, word) => sum + (triangleNumbers[generateWordScore(word)] ? 1 : 0), 0)
  return triangleWordsCount
}
