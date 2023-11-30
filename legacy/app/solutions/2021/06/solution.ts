// https://adventofcode.com/2021/day/6
// https://adventofcode.com/2021/day/6/input

import { puzzleData, testData } from './data'

const lanternfish = () => {
  const useTestData = false
  const data = (useTestData ? testData : puzzleData)[0]
    .split(',')
    .map(n => parseInt(n))

  return [part1(data), part2(data)]
}

const part1 = (data: number[]) => {
  return extrapolateFishAfterGenerations(data, 80)
}

const part2 = (data: number[]) => {
  return extrapolateFishAfterGenerations(data, 256)
}

export default lanternfish

export const solutionData = {
  puzzleData,
  testData,
}

export const extrapolateFishAfterGenerations = (
  data: number[],
  generations: number,
) => {
  let fish = new Array(9).fill(0)
  data.forEach(d => fish[d]++)
  for (let i = 0; i < generations; i++) {
    fish = [
      fish[1],
      fish[2],
      fish[3],
      fish[4],
      fish[5],
      fish[6],
      fish[7] + fish[0],
      fish[8],
      fish[0],
    ]
  }
  return fish.reduce((sum, num) => sum + num)
}
