import data from './data'

// Trebuchet?!

// https://adventofcode.com/2023/day/1
// https://adventofcode.com/2023/day/1/input

export const digitWords = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
}

export const convertWordsToDigits = (line: string) => {
  let result = line
  let continueCondition = true
  do {
    const wordIndex = Object.keys(digitWords)
      .map(digitWord => {
        const idx = result.indexOf(digitWord)
        return { word: digitWord, idx, dig: digitWords[digitWord] }
      })
      .filter(word => word.idx !== -1)
      .sort((a, b) => (a.idx > b.idx ? 1 : -1))
    if (wordIndex.length === 0) {
      continueCondition = false
    } else {
      const firstWord = wordIndex[0]
      result = result.replace(firstWord.word, firstWord.dig)
    }
  } while (continueCondition)
  return result
}

export const solutionOne = () => {
  return data
    .map(line => parseInt(line.match(/\d/)![0] + line.split('').reverse().join('').match(/\d/)![0]))
    .reduce((sum, num) => sum + num, 0)
}

export const solutionTwo = () => {
  return data
    .map(line => convertWordsToDigits(line))
    .map(line => parseInt(line.match(/\d/)![0] + line.split('').reverse().join('').match(/\d/)![0]))
    .reduce((sum, num) => sum + num, 0)
}
