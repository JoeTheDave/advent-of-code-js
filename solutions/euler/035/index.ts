// Project Euler | Problem 35 | Circular Primes
// https://projecteuler.net/problem=35

export const displayName = 'EULER | Problem 35 | Circular Primes'
export const complete = false

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
  // const generator = new PrimeGenerator()
  const resultList = []
  do {
    generator.getNext()
  } while (generator.getCurrent() < 999983)
  generator.primes.forEach(candidate => {
    const candidateList = getNumericRotationsList(candidate)
    let isCircularPrime = true
    for (let c = 0; c < candidateList.length; c++) {
      if (!generator.isPrime(candidateList[c])) {
        isCircularPrime = false
        break
      }
    }
    if (isCircularPrime) {
      resultList.push(candidate)
    }
  })
  return resultList.length
}
