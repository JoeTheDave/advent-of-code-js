// Project Euler | Problem 46 | Goldbach's Other Conjecture
// https://projecteuler.net/problem=46

import { isPrime } from '@/lib/primes'

export const displayName = `EULER | Problem 46 | Goldbach's Other Conjecture`
export const complete = true

export const solution = () => {
  let number = 1
  let answer = 0
  while (!answer) {
    number += 2
    if (!isPrime(number)) {
      let goldbach = false
      const highestDoubledSquare = Math.floor(Math.sqrt(number / 2))
      for (let coefficient = highestDoubledSquare; coefficient > 0; coefficient--) {
        const product = 2 * coefficient ** 2
        const remainder = number - product
        const prime = isPrime(remainder)
        if (prime) {
          goldbach = true
          break
        }
      }
      if (!goldbach) {
        answer = number
      }
    }
  }
  return answer
}
