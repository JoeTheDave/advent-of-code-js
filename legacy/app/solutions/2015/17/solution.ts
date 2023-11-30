// https://adventofcode.com/2015/day/17
// https://adventofcode.com/2015/day/17/input

import { puzzleData, testData } from './data'

const noSuchThingAsTooMuch = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData
  return [part1(data), part2(data)]
}

const part1 = (data: number[]) => {
  const maxNum = parseInt('11111111111111111111', 2)
  let combinations = 0
  for (let i = 1; i <= maxNum; i++) {
    const containerTotal = i
      .toString(2)
      .padStart(20, '0')
      .split('')
      .reduce((sum, used, idx) => {
        return sum + (used === '1' ? data[idx] : 0)
      }, 0)
    if (containerTotal === 150) {
      combinations++
    }
  }
  return combinations
}

const part2 = (data: number[]) => {
  const maxNum = parseInt('11111111111111111111', 2)
  let containerCount = 20
  let combinations = 0
  for (let i = 1; i <= maxNum; i++) {
    const containerList = i.toString(2).padStart(20, '0').split('')
    const containerTotal = containerList.reduce((sum, used, idx) => {
      return sum + (used === '1' ? data[idx] : 0)
    }, 0)
    if (containerTotal === 150) {
      const containersUsed = containerList.filter(c => c === '1').length
      if (containersUsed < containerCount) {
        containerCount = containersUsed
        combinations = 1
      } else if (containersUsed === containerCount) {
        combinations++
      }
    }
  }
  return combinations
}

export default noSuchThingAsTooMuch

export const solutionData = {
  puzzleData,
  testData,
}
