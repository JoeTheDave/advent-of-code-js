// https://adventofcode.com/2022/day/10
// https://adventofcode.com/2022/day/10/input

import { puzzleData, testData } from './data'

const cathodeRayTube = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

const part1 = (data: string[]) => {
  let xReg = 1
  const cycleValues = []
  let signalStrenthSum = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'noop') {
      cycleValues.push(xReg)
    } else {
      cycleValues.push(xReg)
      cycleValues.push(xReg)
      xReg += parseInt(data[i].split(' ')[1])
    }
  }
  for (let i = 20; i <= 220; i += 40) {
    signalStrenthSum += cycleValues[i - 1] * i
  }
  return signalStrenthSum
}

const part2 = (data: string[]) => {
  let cursorPosition = 1
  const cycleValues = []
  const output = []
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'noop') {
      cycleValues.push(cursorPosition)
    } else {
      cycleValues.push(cursorPosition)
      cycleValues.push(cursorPosition)
      cursorPosition += parseInt(data[i].split(' ')[1])
    }
  }
  for (let c = 0; c < cycleValues.length; c++) {
    if (cycleValues[c] - 1 <= c % 40 && c % 40 <= cycleValues[c] + 1) {
      output.push('#')
    } else {
      output.push('.')
    }
  }
  const screen = []
  for (let i = 0; i < 240 / 40; i++) {
    screen.push(output.slice(i * 40, i * 40 + 40).join(''))
  }
  return screen
}

export default cathodeRayTube

export const solutionData = {
  puzzleData,
  testData,
}
