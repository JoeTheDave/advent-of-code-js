// Project Euler | Problem 24 | Lexicographic Permutations
// https://projecteuler.net/problem=24

export const displayName = 'EULER | Problem 24 | Lexicographic Permutations'
export const complete = true

let instanceNumber = 0
let millionthNum = 0

const permuLoop = (options: string[], instance: string[] = []) => {
  if (options.length) {
    for (let x = 0; x < options.length; x++) {
      if (millionthNum) {
        break
      }
      const permuOptions = [...options]
      const inst = [...instance]
      const slice = permuOptions.splice(x, 1)[0]
      inst.push(slice)
      permuLoop(permuOptions, inst)
    }
  } else {
    instanceNumber++
    if (instanceNumber === 1000000) {
      millionthNum = parseInt(instance.join(''))
    }
    return instance.join('')
  }
}

export const solution = () => {
  const options = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  permuLoop(options)
  return millionthNum
}
