import data, { testData } from './data'

// Not Quite Lisp

// https://adventofcode.com/2015/day/1
// https://adventofcode.com/2015/day/1/input

export const solutionOne = () => {
  let floor = 0
  data[0].split('').forEach(c => {
    if (c === '(') {
      floor++
    } else {
      floor--
    }
  })
  return floor
}

export const solutionTwo = () => {
  let firstBasementInstruction = 0
  let floor = 0
  data[0].split('').forEach((c, i) => {
    if (c === '(') {
      floor++
    } else {
      floor--
    }
    if (firstBasementInstruction === 0 && floor === -1) {
      firstBasementInstruction = i + 1
    }
  })
  return firstBasementInstruction
}
