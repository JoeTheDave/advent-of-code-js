import _ from 'lodash'
import { existsSync, writeFileSync } from 'fs'
import { questions, FileData, writeSolutionPathMemoryFile } from './common'

const generateSolutionFile = (fileData: FileData) => {
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

export const displayName = '${_.upperCase(fileData.project)} | ${
    fileData.project === 'aoc' ? `${fileData.year} | Day ${fileData.day}` : ''
  }${fileData.project === 'euler' ? `Problem ${fileData.problem} | ` : ''}'
${
  fileData.project === 'aoc'
    ? `export const complete = false

const testData: string[] = []

const puzzleData: string[] = []

const useTestData = true

const data = useTestData ? testData : puzzleData

export const solutionOne = () => {
  return data
}

export const solutionTwo = () => {
  return data
}

`
    : ''
}${
    fileData.project === 'euler'
      ? `export const complete = false

export const solution = () => {
  return null
}
`
      : ''
  }

`

  try {
    writeFileSync(fileData.modulePath, fileContent)
    writeSolutionPathMemoryFile(fileData.modulePath)
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
