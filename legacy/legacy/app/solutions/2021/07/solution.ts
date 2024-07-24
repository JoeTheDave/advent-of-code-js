// https://adventofcode.com/2021/day/7
// https://adventofcode.com/2021/day/7/input

import { range } from 'lodash'
import { puzzleData, testData } from './data'

const theTreacheryOfWhales = () => {
  const useTestData = false
  const data = (useTestData ? testData : puzzleData)[0]
    .split(',')
    .map(n => parseInt(n))

  return [part1(data), part2(data)]
}

const part1 = (data: number[]) => {
  return range(Math.min(...data), Math.max(...data) + 1).reduce(
    (leastFuel, horizontalPosition) => {
      return Math.min(
        leastFuel,
        data.reduce(
          (fuelConsumption, currentPosition) =>
            fuelConsumption + Math.abs(currentPosition - horizontalPosition),
          0,
        ),
      )
    },
    Number.MAX_SAFE_INTEGER,
  )
}

const part2 = (data: number[]) => {
  return range(Math.min(...data), Math.max(...data) + 1).reduce(
    (leastFuel, horizontalPosition) => {
      return Math.min(
        leastFuel,
        data.reduce(
          (fuelConsumption, currentPosition) =>
            fuelConsumption +
            range(1, Math.abs(currentPosition - horizontalPosition) + 1).reduce(
              (fuelSum, step) => fuelSum + step,
              0,
            ),
          0,
        ),
      )
    },
    Number.MAX_SAFE_INTEGER,
  )
}

export default theTreacheryOfWhales

export const solutionData = {
  puzzleData,
  testData,
}
