// https://adventofcode.com/2021/day/5
// https://adventofcode.com/2021/day/5/input

import { flatten, range } from 'lodash'
import { puzzleData, testData } from './data'

const hydrothermalVenture = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

const part1 = (data: string[]) => {
  return findOverlappingCoords(data)
}

const part2 = (data: string[]) => {
  return findOverlappingCoords(data, true)
}

export default hydrothermalVenture

export const solutionData = {
  puzzleData,
  testData,
}

export const produceCoordinateSet = ({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number
  y1: number
  x2: number
  y2: number
}) => {
  let xs = range(x1, x2 + (x1 <= x2 ? 1 : -1))
  let ys = range(y1, y2 + (y1 <= y2 ? 1 : -1))
  const segmentLength = Math.max(xs.length, ys.length)
  if (xs.length !== segmentLength) {
    for (let i = 0; i < segmentLength - 1; i++) {
      xs.push(xs[0])
    }
  }
  if (ys.length !== segmentLength) {
    for (let i = 0; i < segmentLength - 1; i++) {
      ys.push(ys[0])
    }
  }
  return xs.map((x, idx) => `${x}|${ys[idx]}`)
}

export const findOverlappingCoords = (
  data: string[],
  includeDiags: boolean = false,
) => {
  let coords = data
    .map(d =>
      flatten(d.split(' -> ').map(c => c.split(','))).map(n => parseInt(n)),
    )
    .map(([x1, y1, x2, y2]) => ({ x1, y1, x2, y2 }))
  if (!includeDiags) {
    coords = coords.filter(
      coord => coord.x1 === coord.x2 || coord.y1 === coord.y2,
    )
  }
  let coordsCount = flatten(
    coords.map(coord => produceCoordinateSet(coord)),
  ).reduce(
    (counter, coord) => {
      if (counter[coord]) {
        counter[coord]++
      } else {
        counter[coord] = 1
      }
      return counter
    },
    {} as { [key: string]: number },
  )
  return Object.keys(coordsCount).filter(key => coordsCount[key] > 1).length
}
