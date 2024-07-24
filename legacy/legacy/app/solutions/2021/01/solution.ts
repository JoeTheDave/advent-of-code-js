// https://adventofcode.com/2021/day/1
// https://adventofcode.com/2021/day/1/input

import { puzzleData, testData } from './data'

const sonarSweep = () => {
  const useTestData = false
  const data = (useTestData ? testData : puzzleData).map(i => parseInt(i))

  return [part1(data), part2(data)]
}

const part1 = (data: number[]) => {
  let increasedMeasurements = 0
  data.forEach((measurement, idx) => {
    if (idx > 0 && measurement > data[idx - 1]) {
      increasedMeasurements++
    }
  })
  return increasedMeasurements
}

const part2 = (data: number[]) => {
  let increasedMeasurements = 0
  data.forEach((_, idx) => {
    if (
      idx > 0 &&
      data.slice(idx, idx + 3).reduce((sum, val) => sum + val) >
        data.slice(idx - 1, idx + 2).reduce((sum, val) => sum + val) &&
      data.slice(idx, idx + 3).length === 3
    ) {
      increasedMeasurements++
    }
  })
  return increasedMeasurements
}

export default sonarSweep

export const solutionData = {
  puzzleData,
  testData,
}
