export const getFibonacciSequence = (max: number) => {
  const fibonacci = [1, 2]
  while (
    fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <=
    max
  ) {
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2],
    )
  }
  return fibonacci
}

export const isPalindrome = (term: string | number) => {
  const termString = typeof term === 'string' ? term : `${term}`
  const reversed = termString.split('').reverse().join('')
  return termString === reversed
}
