export const isPrime = (num: number) => {
  if (num <= 1) return false
  if (num <= 3) return true
  if (num % 2 === 0 || num % 3 === 0) return false
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false
  }
  return true
}

export const nextPrime = (num: number) => {
  if (num < 2) return 2
  num = num % 2 === 0 ? num + 1 : num + 2
  while (!isPrime(num)) {
    num += 2
  }
  return num
}

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
    this.initialPrimes = []
    this.primes = []
    this.primeDictionary = {}
  }

  getCurrent() {
    return this.primes[this.primes.length - 1]
  }

  isPrime(num: number) {
    if (num > this.getCurrent() || this.primes.length === 0) {
      do {
        this.getNext()
      } while (num > this.getCurrent())
    }
    return !!this.primeDictionary[num]
  }

  getNext() {
    if (this.initialPrimes.length) {
      this.primes.push(this.initialPrimes.shift() as number)
    } else {
      let candidate = this.getCurrent() + 2
      do {
        let isPrime = true
        for (let n = 0; n < this.primes.length; n++) {
          if (this.primes[n] > Math.sqrt(candidate)) {
            break
          }
          if (candidate % this.primes[n] === 0) {
            isPrime = false
            break
          }
        }
        if (isPrime) {
          this.primes.push(candidate)
        } else {
          candidate += 2
        }
      } while (this.getCurrent() !== candidate)
    }

    this.primeDictionary[this.getCurrent()] = true
    return this.getCurrent()
  }
}
