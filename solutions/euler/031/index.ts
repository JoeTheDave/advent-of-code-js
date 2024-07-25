// Project Euler | Problem 31 | Coin Sums
// https://projecteuler.net/problem=31

export const displayName = 'EULER | Problem 31 | Coin Sums'
export const complete = true

const target = 200
let combinations = 0

const extrapolateCoinCombinations = (
  remainingCoinOptions: number[],
  accumulation: number = 0,
) => {
  const coinOptions: number[] = [...remainingCoinOptions]
  const coin = coinOptions.pop()
  if (!coin) {
    return
  }
  for (let c = 0; c <= target / coin; c++) {
    const iterationAmount = accumulation + c * coin
    if (iterationAmount >= target) {
      if (iterationAmount === target) {
        combinations++
      }
      break
    }
    if (coinOptions.length > 0) {
      extrapolateCoinCombinations(coinOptions, iterationAmount)
    }
  }
}

export const solution = () => {
  const coinTypes = [1, 2, 5, 10, 20, 50, 100, 200]
  extrapolateCoinCombinations(coinTypes)
  return combinations
}
