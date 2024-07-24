// https://adventofcode.com/2021/day/3
// https://adventofcode.com/2021/day/3/input

import { puzzleData, testData } from './data'

const binaryDiagnostic = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

const part1 = (data: string[]) => {
  let gamma = ''
  let epsilon = ''
  for (let i = 0; i < data[0].length; i++) {
    const digits = data.reduce(
      (sum, num) => sum + parseInt(num.split('')[i]),
      0,
    )
    gamma += digits > data.length / 2 ? 1 : 0
    epsilon += digits > data.length / 2 ? 0 : 1
  }
  return parseInt(gamma, 2) * parseInt(epsilon, 2)
}

const part2 = (data: string[]) => {
  let oxyGenList = [...data]
  for (let i = 0; i < data[0].length; i++) {
    const digits = oxyGenList.reduce(
      (sum, num) => sum + parseInt(num.split('')[i]),
      0,
    )
    const common = digits >= oxyGenList.length / 2 ? '1' : '0'

    oxyGenList = oxyGenList.filter(d => d.split('')[i] === common)

    if (oxyGenList.length === 1) {
      break
    }
  }

  let c02ScrubList = [...data]
  for (let i = 0; i < data[0].length; i++) {
    const digits = c02ScrubList.reduce(
      (sum, num) => sum + parseInt(num.split('')[i]),
      0,
    )
    const leastCommon = digits < c02ScrubList.length / 2 ? '1' : '0'

    c02ScrubList = c02ScrubList.filter(d => d.split('')[i] === leastCommon)
    if (c02ScrubList.length === 1) {
      break
    }
  }

  return parseInt(oxyGenList[0], 2) * parseInt(c02ScrubList[0], 2)
}

export default binaryDiagnostic

export const solutionData = {
  puzzleData,
  testData,
}
