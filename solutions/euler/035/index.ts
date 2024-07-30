// Project Euler | Problem 35 | Circular Primes
// https://projecteuler.net/problem=35

import { isPrime, nextPrime } from '@/lib/primes'

export const displayName = 'EULER | Problem 35 | Circular Primes'
export const complete = true

const getNumericRotationsList = (n: number) => {
  const list = []
  const num = `${n}`
  for (let x = 0; x < num.length; x++) {
    const digits = num.split('')
    const shifted = digits.splice(0, x)
    list.push(parseInt([...digits, ...shifted].join('')))
  }
  return list
}

export const solution = () => {
  const resultList = []
  const oneMillion = 1000000
  let prime = 2
  while (prime < oneMillion) {
    const numericRotations = getNumericRotationsList(prime)
    let isCircularPrime = true
    for (let c = 0; c < numericRotations.length; c++) {
      if (!isPrime(numericRotations[c])) {
        isCircularPrime = false
        break
      }
    }
    if (isCircularPrime) {
      resultList.push(prime)
    }
    prime = nextPrime(prime)
  }
  return resultList.length
}
