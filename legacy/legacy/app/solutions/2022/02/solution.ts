// https://adventofcode.com/2022/day/2
// https://adventofcode.com/2022/day/2/input

import { puzzleData, testData } from './data'

const rockPaperScissors = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

const part1 = (data: string[]) => {
  return data.reduce((points, game) => {
    const [opponent, you] = game.split(' ')
    let score = 0
    if (
      (opponent === 'A' && you === 'Y') ||
      (opponent === 'B' && you === 'Z') ||
      (opponent === 'C' && you === 'X')
    ) {
      score += 6
    }
    if (
      (opponent === 'A' && you === 'Z') ||
      (opponent === 'B' && you === 'X') ||
      (opponent === 'C' && you === 'Y')
    ) {
      score += 0
    }
    if (
      (opponent === 'A' && you === 'X') ||
      (opponent === 'B' && you === 'Y') ||
      (opponent === 'C' && you === 'Z')
    ) {
      score += 3
    }
    if (you === 'X') {
      score += 1
    }
    if (you === 'Y') {
      score += 2
    }
    if (you === 'Z') {
      score += 3
    }
    return points + score
  }, 0)
}

const part2 = (data: string[]) => {
  return data.reduce((points, game) => {
    const [opponent, you] = game.split(' ')
    let score = 0
    if (you === 'X') {
      // lose
      score += 0

      if (opponent === 'A') {
        score += 3
      }
      if (opponent === 'B') {
        score += 1
      }
      if (opponent === 'C') {
        score += 2
      }
    }
    if (you === 'Y') {
      // draw
      score += 3

      if (opponent === 'A') {
        score += 1
      }
      if (opponent === 'B') {
        score += 2
      }
      if (opponent === 'C') {
        score += 3
      }
    }
    if (you === 'Z') {
      // win
      score += 6

      if (opponent === 'A') {
        score += 2
      }
      if (opponent === 'B') {
        score += 3
      }
      if (opponent === 'C') {
        score += 1
      }
    }
    return points + score
  }, 0)
}

export default rockPaperScissors

export const solutionData = {
  puzzleData,
  testData,
}
