import { uniq } from 'lodash'
import data from './data'

// Tuning Trouble

// https://adventofcode.com/2022/day/6
// https://adventofcode.com/2022/day/6/input

export const solutionOne = () => {
  let result = 0
  for (let i = 4; i <= data[0].length; i++) {
    if (uniq(data[0].slice(i - 4, i)).length === 4) {
      result = i
      break
    }
  }
  return result
}

export const solutionTwo = () => {
  let result = 0
  for (let i = 14; i <= data[0].length; i++) {
    if (uniq(data[0].slice(i - 14, i)).length === 14) {
      result = i
      break
    }
  }
  return result
}
