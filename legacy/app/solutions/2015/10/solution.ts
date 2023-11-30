// https://adventofcode.com/2015/day/10
// https://adventofcode.com/2015/day/10/input

import { puzzleData, testData } from './data'

const elvesLookElvesSay = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

const evaluateTerm = (term: string) => {
  let currentDigit = ''
  let currentDigitCount = 0
  let newTerm = ''

  const transitionDigit = (digit: string) => {
    if (currentDigit) {
      newTerm += `${currentDigitCount}${currentDigit}`
    }
    currentDigit = digit
    currentDigitCount = 1
  }

  for (let i = 0; i < term.length; i++) {
    if (term[i] !== currentDigit) {
      transitionDigit(term[i])
    } else {
      currentDigitCount++
    }
  }
  transitionDigit('')
  return newTerm
}

const part1 = (data: string) => {
  let term = data
  for (let i = 0; i < 40; i++) {
    term = evaluateTerm(term)
  }
  return term.length
}

const part2 = (data: string) => {
  let term = data
  for (let i = 0; i < 50; i++) {
    term = evaluateTerm(term)
  }
  return term.length
}

export default elvesLookElvesSay

export const solutionData = {
  puzzleData,
  testData,
}
