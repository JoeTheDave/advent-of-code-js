// https://adventofcode.com/2022/day/11
// https://adventofcode.com/2022/day/11/input

import bigInt from 'big-integer'
import { puzzleData, testData } from './data'

const monkeyInTheMiddle = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

const part1 = (data: string[]) => {
  const monkeys = contructMonekies(data)
  for (let round = 0; round < 20; round++) {
    monkeys.forEach(monkey => {
      monkey.items.forEach(item => {
        const newValue = evaluateOperation(item, monkey.operation).divide(3)
        monkeys[
          newValue.mod(monkey.test).isZero()
            ? monkey.trueMonkey
            : monkey.falseMonkey
        ].items.push(newValue)
      })
      monkey.inspectionCount += monkey.items.length
      monkey.items = []
    })
  }

  return monkeys
    .map(m => m.inspectionCount)
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((product, num) => product * num, 1)
}

const part2 = (data: string[]) => {
  // const monkeys = contructMonekies(data)
  // for (let round = 0; round < 10000; round++) {
  //   console.log(round)
  //   monkeys.forEach(monkey => {
  //     monkey.items.forEach(item => {
  //       const newValue = evaluateOperation(item, monkey.operation)
  //       console.log(newValue)
  //       monkeys[
  //         newValue.mod(monkey.test).isZero()
  //           ? monkey.trueMonkey
  //           : monkey.falseMonkey
  //       ].items.push(newValue)
  //     })
  //     monkey.inspectionCount += monkey.items.length
  //     monkey.items = []
  //   })
  // }

  // return monkeys
  //   .map(m => m.inspectionCount)
  //   .sort((a, b) => a - b)
  //   .slice(-2)
  //   .reduce((product, num) => product * num, 1)
  return null
}

export default monkeyInTheMiddle

export const solutionData = {
  puzzleData,
  testData,
}

export interface Monkey {
  id: number
  items: bigInt.BigInteger[]
  operation: string
  test: number
  trueMonkey: number
  falseMonkey: number
  inspectionCount: number
}

export const contructMonekies = (data: string[]) => {
  let monkeys: Monkey[] = []
  for (let m = 0; m < data.length; m += 7) {
    monkeys.push({
      id: parseInt(data[m].split(' ')[1][0]),
      items: data[m + 1]
        .trim()
        .replace('Starting items: ', '')
        .split(', ')
        .map(n => bigInt(n)),
      operation: data[m + 2].trim().replace('Operation: new = ', ''),
      test: parseInt(data[m + 3].trim().replace('Test: divisible by ', '')),
      trueMonkey: parseInt(
        data[m + 4].trim().replace('If true: throw to monkey ', ''),
      ),
      falseMonkey: parseInt(
        data[m + 5].trim().replace('If false: throw to monkey ', ''),
      ),
      inspectionCount: 0,
    })
  }
  return monkeys
}

export const evaluateOperation = (
  item: bigInt.BigInteger,
  operation: string,
) => {
  const op = operation.split(' ')
  const num1 = op[0] === 'old' ? item : bigInt(op[0])
  const num2 = op[2] === 'old' ? item : bigInt(op[2])
  return op[1] === '+' ? num1.add(num2) : num1.multiply(num2)
}
