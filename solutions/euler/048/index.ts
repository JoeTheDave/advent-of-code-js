// Project Euler | Problem 48 | Self Powers
// https://projecteuler.net/problem=48

export const displayName = 'EULER | Problem 48 | Self Powers'
export const complete = true

export const solution = () => {
  let sum = '0'
  for (let i = 1; i <= 1000; i++) {
    sum = (BigInt(sum) + BigInt(i) ** BigInt(i)).toString()
  }
  return sum.substring(sum.length - 10, sum.length)
}
