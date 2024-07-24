import _ from 'lodash'
import { existsSync, writeFileSync } from 'fs'
import { questions, FileData, generateSolutionDirectoryPath } from './common'

const generateSolutionFile = (fileData: FileData) => {
  console.log(fileData)
  //const modulePath = generateSolutionDirectoryPath(fileData)
  if (existsSync(fileData.modulePath)) {
    if (fileData.project === 'aoc') {
      console.log(
        `Solution Files for AoC ${fileData.year} - Day ${fileData.day} already exist...`,
      )
    }
    if (fileData.project === 'euler') {
      console.log(
        `Solution Files for Project Euler Problem ${fileData.problem} already exist...`,
      )
    }
    return null
  }
  const fileContent = `${
    fileData.project === 'aoc'
      ? `// Advent of Code | ${fileData.year} | Day ${fileData.day} | xxx Name xxx`
      : `// Project Euler | Problem ${fileData.problem} | xxx Name xxx`
  }
${
  fileData.project === 'aoc'
    ? `// https://adventofcode.com/${fileData.year}/day/${fileData.day}`
    : `// https://projecteuler.net/problem=${fileData.problem}`
}${
    fileData.project === 'aoc'
      ? `
// https://adventofcode.com/${fileData.year}/day/${fileData.day}/input`
      : ``
  }

export const complete = false

const testData = []

const puzzleData = []

const useTestData = true

const data = useTestData ? testData : puzzleData

export const solutionOne = () => {
  console.log(data)
}${
    fileData.project === 'aoc'
      ? `
  
export const solutionTwo = () => {
  console.log(data)
}`
      : ``
  }

`

  try {
    writeFileSync(fileData.modulePath, fileContent)
  } catch (e) {
    console.log('Unable to generate solution files.')
  }
}

const createProjectFiles = async () => {
  const fileData = await questions()
  if (fileData) {
    generateSolutionFile(fileData)
  } else {
    console.log('An unknown error occurred...')
  }
}
createProjectFiles()
