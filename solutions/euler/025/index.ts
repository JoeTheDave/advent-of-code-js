// Project Euler | Problem 25 | 1000-digit Fibonacci Number
// https://projecteuler.net/problem=25

export const displayName = 'EULER | Problem 25 | 1000-digit Fibonacci Number'
export const complete = true

export const solution = () => {
  const fibonacciSequence = ['1', '1']
  do {
    fibonacciSequence.push(
      (
        BigInt(fibonacciSequence[fibonacciSequence.length - 1]) +
        BigInt(fibonacciSequence[fibonacciSequence.length - 2])
      ).toString(),
    )
  } while (fibonacciSequence[fibonacciSequence.length - 1].length < 1000)
  return fibonacciSequence.length
}
