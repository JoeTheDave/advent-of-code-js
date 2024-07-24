// https://adventofcode.com/2021/day/10
// https://adventofcode.com/2021/day/10/input

import { puzzleData, testData } from './data'

const syntaxScoring = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

const part1 = (data: string[]) => {
  const illegalChars = []
  for (let l = 0; l < data.length; l++) {
    const line = data[l]
    const unClosedTags = []
    const chars = line.split('')
    for (let c = 0; c < chars.length; c++) {
      const openCharIdx = openingChars.indexOf(chars[c])
      if (openCharIdx > -1) {
        unClosedTags.push(chars[c])
        continue
      }
      const closeCharIdx = closingChars.indexOf(chars[c])
      if (closeCharIdx > -1) {
        if (unClosedTags.slice(-1)[0] === openingChars[closeCharIdx]) {
          unClosedTags.pop()
        } else {
          illegalChars.push(closingChars[closeCharIdx])
          break
        }
      }
    }
  }

  return illegalChars
    .map(c => errorPoints[c as keyof typeof errorPoints])
    .reduce((sum, num) => sum + num)
}

const part2 = (data: string[]) => {
  const incompleteList = []
  for (let l = 0; l < data.length; l++) {
    let isError = false
    const line = data[l]
    const unClosedTags = []
    const chars = line.split('')
    for (let c = 0; c < chars.length; c++) {
      const openCharIdx = openingChars.indexOf(chars[c])
      if (openCharIdx > -1) {
        unClosedTags.push(chars[c])
        continue
      }
      const closeCharIdx = closingChars.indexOf(chars[c])
      if (closeCharIdx > -1) {
        if (unClosedTags.slice(-1)[0] === openingChars[closeCharIdx]) {
          unClosedTags.pop()
        } else {
          isError = true
          break
        }
      }
    }
    if (!isError) {
      incompleteList.push(
        unClosedTags.reverse().map(c => closingChars[openingChars.indexOf(c)]),
      )
    }
  }
  const sortedScores = incompleteList
    .map(list =>
      list.reduce(
        (score, char) => score * 5 + closingChars.indexOf(char) + 1,
        0,
      ),
    )
    .sort((a: number, b: number) => a - b)
  return sortedScores[Math.floor(sortedScores.length / 2)]
}

export default syntaxScoring

export const solutionData = {
  puzzleData,
  testData,
}

export const openingChars = '([{<'
export const closingChars = ')]}>'

export const errorPoints = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
}
