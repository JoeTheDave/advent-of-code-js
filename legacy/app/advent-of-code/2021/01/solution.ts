import data from './data'

// Sonar Sweep

// https://adventofcode.com/2021/day/1
// https://adventofcode.com/2021/day/1/input

export const solutionOne = () => {
  const numbers = data.map(s => parseInt(s))
  let increasedMeasurements = 0
  numbers.forEach((measurement, idx) => {
    if (idx > 0 && measurement > numbers[idx - 1]) {
      increasedMeasurements++
    }
  })
  return increasedMeasurements
}

export const solutionTwo = () => {
  const numbers = data.map(s => parseInt(s))
  let increasedMeasurements = 0
  numbers.forEach((_, idx) => {
    if (
      idx > 0 &&
      numbers.slice(idx, idx + 3).reduce((sum, val) => sum + val) >
        numbers.slice(idx - 1, idx + 2).reduce((sum, val) => sum + val) &&
      numbers.slice(idx, idx + 3).length === 3
    ) {
      increasedMeasurements++
    }
  })
  return increasedMeasurements
}
