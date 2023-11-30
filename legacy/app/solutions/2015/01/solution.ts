// https://adventofcode.com/2015/day/1
// https://adventofcode.com/2015/day/1/input

import { puzzleData, testData } from './data'

const notQuiteLisp = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData
  return [part1(data), part2(data)]
}

const part1 = (data: string) => {
  let floor = 0
  data.split('').forEach(c => {
    if (c === '(') {
      floor++
    } else {
      floor--
    }
  })
  return floor
}

const part2 = (data: string) => {
  let firstBasementInstruction = 0
  let floor = 0
  data.split('').forEach((c, i) => {
    if (c === '(') {
      floor++
    } else {
      floor--
    }
    if (firstBasementInstruction === 0 && floor === -1) {
      firstBasementInstruction = i + 1
    }
  })
  return firstBasementInstruction
}

export default notQuiteLisp

export const solutionData = {
  puzzleData,
  testData,
}
