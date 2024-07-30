// Project Euler | Problem 45 | Triangular, Pentagonal, and Hexagonal
// https://projecteuler.net/problem=45

export const displayName = 'EULER | Problem 45 | Triangular, Pentagonal, and Hexagonal'
export const complete = true

const triangular = (n: number) => (n * (n + 1)) / 2
const pentagonal = (n: number) => (n * (3 * n - 1)) / 2
const hexagonal = (n: number) => n * (2 * n - 1)

export const solution = () => {
  let tN = 285 + 1
  let pN = 165 + 1
  let hN = 143 + 1
  do {
    tN++
    if (triangular(tN) > pentagonal(pN)) {
      pN++
    }
    if (triangular(tN) > hexagonal(hN)) {
      hN++
    }
  } while (triangular(tN) !== pentagonal(pN) || triangular(tN) !== hexagonal(hN))
  console.log(`Tn: ${tN} = ${triangular(tN)}`)
  console.log(`Pn: ${pN} = ${pentagonal(pN)}`)
  console.log(`Hn: ${hN} = ${hexagonal(hN)}`)
  return triangular(tN)
}
