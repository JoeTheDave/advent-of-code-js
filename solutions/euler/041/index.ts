// Project Euler | Problem 41 | Pandigital Prime
// https://projecteuler.net/problem=41

import { PrimeGenerator } from '@/lib/primes'

export const displayName = 'EULER | Problem 41 | Pandigital Prime'
export const complete = false

export const pandigitalPermutator = (seed: number, asStrings: boolean = false) => {
  let items = `${seed}`.split('')
  let result: (string | number)[] = [asStrings ? `${seed}` : seed],
    c = new Array(items.length).fill(0),
    i = 1,
    k,
    p

  while (i < items.length) {
    if (c[i] < i) {
      k = i % 2 && c[i]
      p = items[i]
      items[i] = items[k]
      items[k] = p
      ++c[i]
      i = 1
      result.push(asStrings ? items.join('') : parseInt(items.join('')))
    } else {
      c[i] = 0
      ++i
    }
  }
  return result
}

// Note: This solution worked in the legacy project.  But is crashing the new version of the prime generator.
// The expected answer is 7652413

export const solution = () => {
  const primeGenerator = new PrimeGenerator()
  let largestPandigitalPrime = 0

  let seed = ''
  for (let x = 1; x <= 9; x++) {
    seed += x
    const candidateList: number[] = pandigitalPermutator(parseInt(seed)) as number[]
    for (let c = 0; c < candidateList.length; c++) {
      const candidate = candidateList[c]
      if (primeGenerator.isPrime(candidate) && candidate > largestPandigitalPrime) {
        largestPandigitalPrime = candidate
      }
    }
  }
  return largestPandigitalPrime
}
