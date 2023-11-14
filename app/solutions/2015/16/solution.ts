// https://adventofcode.com/2015/day/16
// https://adventofcode.com/2015/day/16/input

import { puzzleData, testData } from './data'

const auntSue = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  // console.log(data)

  return [part1(data), part2(data)]
}

interface Person {
  num: number
  children: number | null
  cats: number | null
  samoyeds: number | null
  pomeranians: number | null
  akitas: number | null
  vizslas: number | null
  goldfish: number | null
  trees: number | null
  cars: number | null
  perfumes: number | null
}

const parseData = (data: string[]) => {
  return data.map(string => {
    const num = parseInt(string.slice(4, string.indexOf(':')))
    const person: Person = {
      num,
      children: null,
      cats: null,
      samoyeds: null,
      pomeranians: null,
      akitas: null,
      vizslas: null,
      goldfish: null,
      trees: null,
      cars: null,
      perfumes: null,
    }
    string
      .slice(string.indexOf(':') + 2)
      .split(', ')
      .forEach(info => {
        const [property, value] = info.split(': ')
        person[property as keyof Person] = parseInt(value)
      })
    return person
  })
}

const part1 = (data: string[]) => {
  const people = parseData(data)
  return people.find(
    person =>
      (person.children === null || person.children === 3) &&
      (person.cats === null || person.cats === 7) &&
      (person.samoyeds === null || person.samoyeds === 2) &&
      (person.pomeranians === null || person.pomeranians === 3) &&
      (person.akitas === null || person.akitas === 0) &&
      (person.vizslas === null || person.vizslas === 0) &&
      (person.goldfish === null || person.goldfish === 5) &&
      (person.trees === null || person.trees === 3) &&
      (person.cars === null || person.cars === 2) &&
      (person.perfumes === null || person.perfumes === 1),
  )?.num
}

const part2 = (data: string[]) => {
  const people = parseData(data)
  return people.find(
    person =>
      (person.children === null || person.children === 3) &&
      (person.cats === null || person.cats > 7) &&
      (person.samoyeds === null || person.samoyeds === 2) &&
      (person.pomeranians === null || person.pomeranians < 3) &&
      (person.akitas === null || person.akitas === 0) &&
      (person.vizslas === null || person.vizslas === 0) &&
      (person.goldfish === null || person.goldfish < 5) &&
      (person.trees === null || person.trees > 3) &&
      (person.cars === null || person.cars === 2) &&
      (person.perfumes === null || person.perfumes === 1),
  )?.num
}

export default auntSue

export const solutionData = {
  puzzleData,
  testData,
}
