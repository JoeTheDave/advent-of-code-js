// https://adventofcode.com/2015/day/12
// https://adventofcode.com/2015/day/12/input

import { puzzleData, testData } from './data'

const jsAbacusFrameworkIo = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData
  return [part1(data), part2(data)]
}

const parseNumbersFromDatastore = (data: any): number => {
  if (typeof data === 'object') {
    return Object.keys(data)
      .map(key => parseNumbersFromDatastore(data[key]))
      .reduce((sum, val) => sum + val, 0)
  } else if (typeof data === 'number') {
    return data
  } else {
    return 0
  }
}

const discriminatelyParseNumbersFromDatastore = (data: any): number => {
  if (typeof data === 'object') {
    if (
      data.length === undefined &&
      Object.keys(data).some(key => data[key] === 'red')
    ) {
      return 0
    }
    return Object.keys(data)
      .map(key => discriminatelyParseNumbersFromDatastore(data[key]))
      .reduce((sum, val) => sum + val, 0)
  } else if (typeof data === 'number') {
    return data
  } else {
    return 0
  }
}

const part1 = (data: string[]) => {
  return parseNumbersFromDatastore(data)
}

const part2 = (data: string[]) => {
  return discriminatelyParseNumbersFromDatastore(data)
}

export default jsAbacusFrameworkIo

export const solutionData = {
  puzzleData,
  testData,
}
