// https://adventofcode.com/2021/day/2
// https://adventofcode.com/2021/day/2/input

import { puzzleData, testData } from './data'

const dive = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

const part1 = (data: string[]) => {
  const position = data.reduce(
    (position, move) => {
      const [direction, magnitude] = move.split(' ')
      if (direction === 'forward') {
        position.distance += parseInt(magnitude)
      } else if (direction === 'down') {
        position.depth += parseInt(magnitude)
      } else if (direction === 'up') {
        position.depth -= parseInt(magnitude)
      }
      return position
    },
    { distance: 0, depth: 0 },
  )
  return position.distance * position.depth
}

const part2 = (data: string[]) => {
  const position = data.reduce(
    (position, move) => {
      const [direction, magnitude] = move.split(' ')
      if (direction === 'forward') {
        position.distance += parseInt(magnitude)
        position.depth += position.aim * parseInt(magnitude)
      } else if (direction === 'down') {
        position.aim += parseInt(magnitude)
      } else if (direction === 'up') {
        position.aim -= parseInt(magnitude)
      }
      return position
    },
    { distance: 0, depth: 0, aim: 0 },
  )
  return position.distance * position.depth
}

export default dive

export const solutionData = {
  puzzleData,
  testData,
}
