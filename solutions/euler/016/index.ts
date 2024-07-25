// Project Euler | Problem 16 | Power Digit Sum
// https://projecteuler.net/problem=16

export const displayName = 'EULER | Problem 16 | Power Digit Sum'
export const complete = true

export const solution = () => {
  return (BigInt(2) ** BigInt(1000))
    .toString()
    .split('')
    .reduce((sum, num) => sum + parseInt(num), 0)
}
