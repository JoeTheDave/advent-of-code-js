// Project Euler | Problem 37 | Truncatable Primes
// https://projecteuler.net/problem=37

import { isPrime, nextPrime } from '@/lib/primes'

export const displayName = 'EULER | Problem 37 | Truncatable Primes'
export const complete = true

export const solution = () => {
  const truncatablePrimesList = []
  let prime = 7
  while (truncatablePrimesList.length < 11) {
    prime = nextPrime(prime)
    if (prime > 7) {
      const primeDigits = `${prime}`.split('')
      let isTruncatablePrime = true
      for (let x = 1; x < primeDigits.length; x++) {
        if (
          !isPrime(parseInt(primeDigits.slice(0, primeDigits.length - x).join(''))) ||
          !isPrime(parseInt(primeDigits.slice(x, primeDigits.length).join('')))
        ) {
          isTruncatablePrime = false
          break
        }
      }
      if (isTruncatablePrime) {
        truncatablePrimesList.push(prime)
      }
    }
  }
  return truncatablePrimesList.reduce((sum, num) => sum + num, 0)
}
