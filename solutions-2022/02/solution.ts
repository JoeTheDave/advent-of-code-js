import { readFileSync } from 'fs'

// https://adventofcode.com/2022/day/2
// https://adventofcode.com/2022/day/2/input

const testData = [
  'A Y',
  'B X',
  'C Z',
]
const useTestData = true

export const rockPaperScissors = () => {
  const data = useTestData
    ? testData
    : readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
  console.log(data)
  return 0
}
