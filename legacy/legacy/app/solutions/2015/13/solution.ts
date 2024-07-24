// https://adventofcode.com/2015/day/13
// https://adventofcode.com/2015/day/13/input

import { puzzleData, testData } from './data'
import { permutator } from '../../../lib/util'

const knightsOfTheDinnerTable = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData
  return [part1(data), part2(data)]
}

type HappinessMatrix = { [key: string]: { [key: string]: number } }

const generateHappinessMatrix = (data: string[]) => {
  const people: HappinessMatrix = {}
  data
    .map(fact =>
      fact
        .replace('gain ', '')
        .replace('lose ', '-')
        .replace('.', '')
        .replace('happiness units by sitting next to', 'would')
        .split(' would '),
    )
    .forEach(fact => {
      const [person, delta, relation] = fact
      if (!people[person]) {
        people[person] = {}
      }
      people[person][relation] = parseInt(delta)
    })
  return people
}

const determineOptimalHappiness = (matrix: HappinessMatrix) => {
  const people = Object.keys(matrix)
  const permutations: string[][] = permutator(people)
  const permutationOutcomes = permutations.map(permutation => {
    return permutation
      .map((person, i) => {
        const left = permutation[i === 0 ? permutation.length - 1 : i - 1]
        const right = permutation[i === permutation.length - 1 ? 0 : i + 1]
        return matrix[person][left] + matrix[person][right]
      })
      .reduce((sum, val) => sum + val, 0)
  })
  return permutationOutcomes.reduce((max, val) => Math.max(max, val), 0)
}

const injectSelf = (matrix: HappinessMatrix) => {
  matrix['me'] = {}
  Object.keys(matrix).forEach(key => {
    matrix[key]['me'] = 0
    matrix['me'][key] = 0
  })
  return matrix
}

const part1 = (data: string[]) => {
  const matrix = generateHappinessMatrix(data)
  return determineOptimalHappiness(matrix)
}

const part2 = (data: string[]) => {
  const matrix = injectSelf(generateHappinessMatrix(data))
  return determineOptimalHappiness(matrix)
}

export default knightsOfTheDinnerTable

export const solutionData = {
  puzzleData,
  testData,
}
