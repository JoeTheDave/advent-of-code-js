// export const isPrime = (num: number) => {
//   if (num <= 1) return false
//   if (num <= 3) return true
//   if (num % 2 === 0 || num % 3 === 0) return false
//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) return false
//   }
//   return true
// }

// export const nextPrime = (num: number) => {
//   if (num < 2) return 2
//   num = num % 2 === 0 ? num + 1 : num + 2
//   while (!isPrime(num)) {
//     num += 2
//   }
//   return num
// }

export const getPrimeFactors = (num: number) => {
  const factors: number[] = []
  while (num % 2 === 0) {
    factors.push(2)
    num /= 2
  }
  for (let i = 3; i * i <= num; i += 2) {
    while (num % i === 0) {
      factors.push(i)
      num /= i
    }
  }
  if (num > 2) {
    factors.push(num)
  }
  return factors
}

export class PrimeGenerator {
  initialPrimes: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  primes: number[]
  primeDictionary: { [key: number]: boolean }

  constructor() {
    this.initialPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    this.primes = []
    this.primeDictionary = {}
  }

  getCurrent() {
    if (!this.primes.length) {
      this.getNext()
    }
    return this.primes[this.primes.length - 1]
  }

  getCurrentList() {
    return this.primes
  }

  isPrime(num: number) {
    if (this.primes.length === 0 || num > this.getCurrent()) {
      do {
        this.getNext()
      } while (num > this.getCurrent())
    }
    return !!this.primeDictionary[num]
  }

  verify(num: number) {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false
    }
    return true
  }

  getNext() {
    if (this.initialPrimes.length) {
      this.primes.push(this.initialPrimes.shift() as number)
    } else {
      let candidate = this.getCurrent() % 2 === 0 ? this.getCurrent() + 1 : this.getCurrent() + 2
      while (!this.verify(candidate)) {
        candidate += 2
      }
      this.primes.push(candidate)
    }
    this.primeDictionary[this.getCurrent()] = true
    return this.getCurrent()
  }
}
