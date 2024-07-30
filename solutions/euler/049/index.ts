// Project Euler | Problem 49 | Prime Permutations
// https://projecteuler.net/problem=49

import { range, padStart, uniq } from 'lodash'
import { getCombinations, getPermutations } from '@/lib/sequence'
import { isPrime } from '@/lib/primes'

export const displayName = 'EULER | Problem 49 | Prime Permutations'
export const complete = true

export const solution = () => {
  let answer = ''

  const combinations = range(10000).map(i => padStart(`${i}`, 4, '0').split(''))

  for (let i = 0; i < combinations.length; i++) {
    const permutations = uniq(
      getPermutations(combinations[i], 4)
        .map(permutation => parseInt(permutation.join('')))
        .filter(permutation => `${permutation}`.length === 4 && isPrime(permutation)),
    ).sort()

    if (permutations.length > 2) {
      const primeSequences = getCombinations(permutations, 3)

      for (let j = 0; j < primeSequences.length; j++) {
        if (
          !primeSequences[j].includes(1487) &&
          primeSequences[j][1] - primeSequences[j][0] === primeSequences[j][2] - primeSequences[j][1]
        ) {
          answer = primeSequences[j].join('')
          break
        }
      }
    }
    if (answer) {
      break
    }
  }

  return answer
}
