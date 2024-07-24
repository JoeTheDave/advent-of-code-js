// Project Euler | Problem 6 | Sum Square Difference
// https://projecteuler.net/problem=6

export const displayName = 'EULER | Problem 6 - Sum Square Difference'

export const complete = true

export const solution = () => {
  let sum = 0
  let sumOfSquares = 0
  for (let n = 1; n <= 100; n++) {
    sum += n
    sumOfSquares += n ** 2
  }
  const squareOfSum = sum ** 2
  return squareOfSum - sumOfSquares
}
