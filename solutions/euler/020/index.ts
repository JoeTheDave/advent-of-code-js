// Project Euler | Problem 20 | Factorial Digit Sum
// https://projecteuler.net/problem=20

export const displayName = 'EULER | Problem 20 | Factorial Digit Sum'
export const complete = true

export const solution = () => {
  let sum = '1'
  for (let i = 1; i <= 100; i++) {
    sum = (BigInt(sum) * BigInt(i)).toString()
  }
  return sum.split('').reduce((sum, num) => sum + parseInt(num), 0)
}
