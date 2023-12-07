import { range } from 'lodash'
import data from './data'

// The Treachery of Whales

// https://adventofcode.com/2021/day/7
// https://adventofcode.com/2021/day/7/input

export const solutionOne = () => {
  const numbers = data[0].split(',').map(s => parseInt(s))
  return range(Math.min(...numbers), Math.max(...numbers) + 1).reduce((leastFuel, horizontalPosition) => {
    return Math.min(
      leastFuel,
      numbers.reduce(
        (fuelConsumption, currentPosition) => fuelConsumption + Math.abs(currentPosition - horizontalPosition),
        0,
      ),
    )
  }, Number.MAX_SAFE_INTEGER)
}

export const solutionTwo = () => {
  const numbers = data[0].split(',').map(s => parseInt(s))
  return range(Math.min(...numbers), Math.max(...numbers) + 1).reduce((leastFuel, horizontalPosition) => {
    return Math.min(
      leastFuel,
      numbers.reduce(
        (fuelConsumption, currentPosition) =>
          fuelConsumption +
          range(1, Math.abs(currentPosition - horizontalPosition) + 1).reduce((fuelSum, step) => fuelSum + step, 0),
        0,
      ),
    )
  }, Number.MAX_SAFE_INTEGER)
}
