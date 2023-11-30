// https://adventofcode.com/2015/day/4
// https://adventofcode.com/2015/day/4/input

import crypto from 'crypto'

import { puzzleData, testData } from './data'

const theIdealStockingStuffer = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData
  return [part1(data), part2(data)]
}

// 346660000

const findSecretWithPattern = (
  key: string,
  matchPattern: string,
  start: number = 0,
) => {
  console.log(key)
  let secret = start
  let foundSecret = false

  do {
    const hash = crypto
      .createHash('md5')
      .update(`${key}${secret}`)
      .digest('hex')

    if (hash.slice(0, 5) === matchPattern) {
      foundSecret = true
    } else {
      secret++
    }
    if (secret % 1000000 === 0) {
      console.log(secret)
    }
  } while (!foundSecret)
  return secret
}

const part1 = (data: string) => {
  return findSecretWithPattern(data, '00000')
}

const part2 = (data: string) => {
  return findSecretWithPattern(data, '000000', 24952000000)
}

export default theIdealStockingStuffer

export const solutionData = {
  puzzleData,
  testData,
}
