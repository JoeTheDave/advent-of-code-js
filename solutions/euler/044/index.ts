// Project Euler | Problem 44 | Pentagon Numbers
// https://projecteuler.net/problem=44

export const displayName = 'EULER | Problem 44 | Pentagon Numbers'
export const complete = false

const pentagonalNumber = (n: number) => (n * (3 * n - 1)) / 2

export const solution = () => {
  const maxAttemptedPentagonal = 10000
  const pentagonalDictionary: { [key: string]: number } = {}
  const inverseDictionary: { [key: string]: number } = {}
  for (let n = 1; n <= maxAttemptedPentagonal; n++) {
    pentagonalDictionary[`${n}`] = pentagonalNumber(n)
    inverseDictionary[`${pentagonalDictionary[`${n}`]}`] = n
  }
  for (let k = 2; k <= maxAttemptedPentagonal; k++) {
    for (let j = 1; j < k; j++) {
      const sum = pentagonalDictionary[k] + pentagonalDictionary[j]
      const diff = pentagonalDictionary[k] - pentagonalDictionary[j]
      const sumIsP = !!inverseDictionary[sum]
      const diffIsP = !!inverseDictionary[diff]
      if (sumIsP && diffIsP) {
        console.log('**************************************************')
        console.log(`P${j} = ${pentagonalDictionary[j]}`)
        console.log(`P${k} = ${pentagonalDictionary[k]}`)
        if (sumIsP) {
          console.log(`P${inverseDictionary[sum]} = ${sum} | SUM IS PENTAGONAL`)
        }
        if (diffIsP) {
          console.log(`P${inverseDictionary[diff]} = ${diff} | DIFF IS PENTAGONAL`)
        }
      }
    }
  }
  return null
}
