import data from './data'

// Lanternfish

// https://adventofcode.com/2021/day/6
// https://adventofcode.com/2021/day/6/input

export const extrapolateFishAfterGenerations = (data: number[], generations: number) => {
  let fish = new Array(9).fill(0)
  data.forEach(d => fish[d]++)
  for (let i = 0; i < generations; i++) {
    fish = [fish[1], fish[2], fish[3], fish[4], fish[5], fish[6], fish[7] + fish[0], fish[8], fish[0]]
  }
  return fish.reduce((sum, num) => sum + num)
}

export const solutionOne = () => {
  const numbers = data[0].split(',').map(s => parseInt(s))
  return extrapolateFishAfterGenerations(numbers, 80)
}

export const solutionTwo = () => {
  const numbers = data[0].split(',').map(s => parseInt(s))
  return extrapolateFishAfterGenerations(numbers, 256)
}
