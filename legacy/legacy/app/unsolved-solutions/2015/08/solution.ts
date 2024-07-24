// https://adventofcode.com/2015/day/8
// https://adventofcode.com/2015/day/8/input

import { puzzleData, testData } from './data'

const matchsticks = () => {
  const useTestData = true
  const data = useTestData ? testData : puzzleData

  console.log(data)

  return [part1(data), part2(data)]
}

const part1 = (data: string[]) => {
  return null
}

const part2 = (data: string[]) => {
  return null
}

export default matchsticks

export const solutionData = {
  puzzleData,
  testData,
}
