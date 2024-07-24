// https://adventofcode.com/2022/day/3
// https://adventofcode.com/2022/day/3/input

import { puzzleData, testData } from './data'

const rucksackReorganization = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

const part1 = (data: string[]) => {
  let score = 0

  data.forEach(rucksack => {
    const compartment1 = rucksack.slice(0, rucksack.length / 2)
    const compartment2 = rucksack.slice(rucksack.length / 2)

    const match = compartment1.split('').reduce((match, letter) => {
      if (compartment2.includes(letter)) {
        return letter
      }
      return match
    }, '')

    if (alpha.includes(match)) {
      score += alpha.indexOf(match) + 1
    }
    if (alpha.toUpperCase().includes(match)) {
      score += alpha.toUpperCase().indexOf(match) + 27
    }
  })
  return score
}

const part2 = (data: string[]) => {
  let score = 0
  for (let i = 0; i < 100; i++) {
    const sacks = data.slice(i * 3, i * 3 + 3)

    const match = sacks[0].split('').reduce((match, item) => {
      if (sacks[1].includes(item) && sacks[2].includes(item)) {
        return item
      }
      return match
    }, '')

    if (alpha.includes(match)) {
      score += alpha.indexOf(match) + 1
    }
    if (alpha.toUpperCase().includes(match)) {
      score += alpha.toUpperCase().indexOf(match) + 27
    }
  }
  return score
}

export default rucksackReorganization

export const solutionData = {
  puzzleData,
  testData,
}

export const alpha = 'abcdefghijklmnopqrstuvwxyz'
