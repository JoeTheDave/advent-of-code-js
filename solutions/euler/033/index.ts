// Project Euler | Problem 33 | Digit Cancelling Fractions
// https://projecteuler.net/problem=33

export const displayName = 'EULER | Problem 33 | Digit Cancelling Fractions'
export const complete = true

const mapToNums = (val: string[]) => val.map(n => parseInt(n))

const hasCancelableDigits = (numerator: number, denominator: number) => {
  const n = `${numerator}`.split('')
  const d = `${denominator}`.split('')
  if (n[0] === d[0]) {
    return mapToNums([n[1], d[1]])
  }
  if (n[1] === d[0]) {
    return mapToNums([n[0], d[1]])
  }
  if (n[0] === d[1]) {
    return mapToNums([n[1], d[0]])
  }
  if (n[1] === d[1] && d[1] !== '0') {
    return mapToNums([n[0], d[0]])
  }
  return null
}

export const solution = () => {
  let numerator = 1
  let denominator = 1
  for (let d = 11; d <= 99; d++) {
    for (let n = 10; n < d; n++) {
      const reducedDigits = hasCancelableDigits(n, d)
      if (reducedDigits) {
        const [a, b] = reducedDigits
        if (n / d === a / b) {
          numerator *= a
          denominator *= b
        }
      }
    }
  }
  return denominator / numerator
}
