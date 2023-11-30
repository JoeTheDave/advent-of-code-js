// https://adventofcode.com/2015/day/3
// https://adventofcode.com/2015/day/3/input

import { puzzleData, testData } from './data'

const perfectlySphericalHousesInAVacuum = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

const part1 = (data: string) => {
  const positionPresents = {} as { [key: string]: number }
  const position = [0, 0]
  const deliverPresent = (pos: number[]) => {
    const key = `${pos[0]}|${pos[1]}`
    positionPresents[key] = (positionPresents[key] || 0) + 1
  }
  deliverPresent(position)

  data.split('').forEach(direction => {
    if (direction === '^') {
      position[0]++
    } else if (direction === 'v') {
      position[0]--
    } else if (direction === '<') {
      position[1]--
    } else if (direction === '>') {
      position[1]++
    }
    deliverPresent(position)
  })
  return Object.keys(positionPresents).length
}

const part2 = (data: string) => {
  const positionPresents = {} as { [key: string]: number }
  const santaPosition = [0, 0]
  const roboSantaPosition = [0, 0]

  const deliverPresent = (pos: number[]) => {
    const key = `${pos[0]}|${pos[1]}`
    positionPresents[key] = (positionPresents[key] || 0) + 1
  }
  deliverPresent(santaPosition)
  deliverPresent(roboSantaPosition)

  data.split('').forEach((direction, i) => {
    const position = i % 2 === 0 ? santaPosition : roboSantaPosition
    if (direction === '^') {
      position[0]++
    } else if (direction === 'v') {
      position[0]--
    } else if (direction === '<') {
      position[1]--
    } else if (direction === '>') {
      position[1]++
    }
    deliverPresent(position)
  })
  return Object.keys(positionPresents).length
}

export default perfectlySphericalHousesInAVacuum

export const solutionData = {
  puzzleData,
  testData,
}
