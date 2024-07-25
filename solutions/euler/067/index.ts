// Project Euler | Problem 67 | Maximum Path Sum II
// https://projecteuler.net/problem=67

import { readFileSync } from 'fs'
import { maximumPyramidPathSum } from '@/lib/algorithms'

export const displayName = 'EULER | Problem 67 | Maximum Path Sum II'
export const complete = true

export const solution = () => {
  const rawData = readFileSync(`${__dirname}/triangle.txt`, 'utf8')
  const data = rawData
    .split('\n')
    .map(row => row.split(' ').map(n => parseInt(n)))
  return maximumPyramidPathSum(data)
}
