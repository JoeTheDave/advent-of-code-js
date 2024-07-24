export const isPrime = (num: number) => {
  if (num <= 1) return false
  if (num <= 3) return true
  if (num % 2 === 0 || num % 3 === 0) return false
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false
  }
  return true
}

export const findFirstPrimeInRange = (start: number, end: number) => {
  if (start > end) return null
  for (let i = Math.max(start, 2); i <= end; i++) {
    if (isPrime(i)) {
      return i
    }
  }
  return null
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
