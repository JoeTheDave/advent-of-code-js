// Project Euler | Problem 40 | Champernowne's Constant
// https://projecteuler.net/problem=40

export const displayName = `EULER | Problem 40 | Champernowne's Constant`
export const complete = true

export const solution = () => {
  const oneMillion = 1000000
  let champernowne = ''
  let x = 1
  let product = 1
  do {
    champernowne += x
    x++
  } while (champernowne.length <= oneMillion)
  for (let e = 0; e <= 6; e++) {
    product *= parseInt(champernowne.charAt(10 ** e - 1))
  }
  return product
}
