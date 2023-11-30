// https://adventofcode.com/2022/day/6
// https://adventofcode.com/2022/day/6/input

import { uniq } from 'lodash'
import { puzzleData, testData } from './data'

const tuningTrouble = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  return [part1(data[0]), part2(data[0])]
}

const part1 = (data: string) => {
  let result = 0
  for (let i = 4; i <= data.length; i++) {
    if (uniq(data.slice(i - 4, i)).length === 4) {
      result = i
      break
    }
  }
  return result
}

const part2 = (data: string) => {
  let result = 0
  for (let i = 14; i <= data.length; i++) {
    if (uniq(data.slice(i - 14, i)).length === 14) {
      result = i
      break
    }
  }
  return result
}

export default tuningTrouble

export const solutionData = {
  puzzleData,
  testData,
}
