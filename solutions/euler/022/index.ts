// Project Euler | Problem 22 | Names Scores
// https://projecteuler.net/problem=22

import { readFileSync } from 'fs'
import { generateWordScore } from '@/lib/analysis'

export const displayName = 'EULER | Problem 22 | Names Scores'
export const complete = true

export const solution = () => {
  const rawData = readFileSync(`${__dirname}/names.txt`, 'utf8')
  return rawData
    .split(',')
    .sort()
    .map((name, idx) => generateWordScore(name) * (idx + 1))
    .reduce((sum, score) => sum + score, 0)
}
