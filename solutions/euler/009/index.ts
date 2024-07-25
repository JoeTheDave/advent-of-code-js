// Project Euler | Problem 9 | Special Pythagorean Triplet
// https://projecteuler.net/problem=9

export const displayName = 'EULER | Problem 9 | Special Pythagorean Triplet'
export const complete = true

export const solution = () => {
  for (let b = 1; b <= 1000; b++) {
    for (let a = 1; a < b; a++) {
      const c = Math.sqrt(a ** 2 + b ** 2)
      if (a + b + c === 1000) {
        return a * b * c
      }
    }
  }
}
