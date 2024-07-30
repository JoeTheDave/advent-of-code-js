export const getFibonacciSequence = (max: number) => {
  const fibonacci = [1, 2]
  while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= max) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
  }
  return fibonacci
}

export const isPalindrome = (term: string | number) => {
  const termString = typeof term === 'string' ? term : `${term}`
  const reversed = termString.split('').reverse().join('')
  return termString === reversed
}

export const digitPermutator = (seed: number) => {
  let items = `${seed}`.split('')
  let result: number[] = [seed],
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
      result.push(parseInt(items.join('')))
    } else {
      c[i] = 0
      ++i
    }
  }
  return result
}

export const getCombinations = <T>(arr: T[], n: number): T[][] => {
  function iterator(prefix: T[], elements: T[], n: number) {
    if (n === 0) {
      results.push(prefix)
      return
    }

    for (let i = 0; i < elements.length; i++) {
      iterator(prefix.concat(elements[i]), elements.slice(i + 1), n - 1)
    }
  }

  const results: T[][] = []
  iterator([], arr, n)
  return results
}

export const getPermutations = <T>(arr: T[], n: number): T[][] => {
  function iterator(prefix: T[], elements: T[], n: number) {
    if (n === 0) {
      results.push(prefix)
      return
    }

    for (let i = 0; i < elements.length; i++) {
      iterator(prefix.concat(elements[i]), elements.slice(0, i).concat(elements.slice(i + 1)), n - 1)
    }
  }

  const results: T[][] = []
  iterator([], arr, n)
  return results
}
