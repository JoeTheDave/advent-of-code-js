// Project Euler | Problem 14 | Longest Collatz Sequence
// https://projecteuler.net/problem=14

export const displayName = 'EULER | Problem 14 | Longest Collatz Sequence'
export const complete = true

const collatzStep = (num: number) => (num % 2 === 0 ? num / 2 : 3 * num + 1)

// const collatzSequence = (num: number) => {
//   const sequence = [num]
//   do {
//     sequence.push(collatzStep(sequence[sequence.length - 1]))
//   } while (sequence[sequence.length - 1] > 1)
//   return sequence
// }

const collatzCache: { [key: number]: number } = {}

const collatzSequence = (seed: number) => {
  let sequenceLength = 1
  let iteration = seed
  let cachedResult = undefined
  const sequence = [seed]

  while (iteration !== 1) {
    iteration = collatzStep(iteration)
    cachedResult = collatzCache[iteration]
    if (cachedResult) {
      iteration = 1
    } else {
      sequence.push(iteration)
      sequenceLength++
    }
  }
  sequence.forEach(
    (i, idx) => (collatzCache[i] = sequenceLength - idx + (cachedResult || 0)),
  )
  return collatzCache[seed]
}

// Note: The current version of the collatzSequence function utilizes a cache to avoid iterating
// over portions of the sequence that have already been seen. Using this caching system vastly
// improves performance of this function and reaches a solution in 0.91 seconds compared to
// 2.44 seconds achieved by the previous solution

export const solution = () => {
  const oneMillion = 1000000
  let longestSequence = 0
  let winningSeed = 0
  for (let i = 1; i < oneMillion; i++) {
    const currentSequenceLength = collatzSequence(i)
    if (currentSequenceLength > longestSequence) {
      longestSequence = currentSequenceLength
      winningSeed = i
    }
  }
  return winningSeed
}
