import { existsSync } from 'fs'
import {
  readSolutionPathMemoryFile,
  questions,
  writeSolutionPathMemoryFile,
} from './common'

const runSolution = async () => {
  const args = process.argv.splice(2)

  let modulePath = ''
  if (args[0] === '-c') {
    // TODO: Using this questions function causes the path to be created, even when it doesn't already exist.
    // This results in an empty project directory if the user asks for one that hasn't already been created.
    // Better solution to build a line of questioning that will browse the directory structure.
    // This can be done once we have a few solutions to browse through.

    const fileData = await questions()
    if (fileData) {
      writeSolutionPathMemoryFile(fileData.modulePath)
    }
  }
  modulePath = readSolutionPathMemoryFile()

  if (existsSync(modulePath)) {
    const dynamicModule = require(modulePath)
    const displayName = dynamicModule['displayName']
    console.log()
    console.log(`Executing Solutions for ${displayName}`)

    Object.keys(dynamicModule)
      .filter(key => key.includes('solution'))
      .forEach(solutionKey => {
        console.log()
        console.time(solutionKey)
        const result = dynamicModule[solutionKey]()
        console.timeEnd(solutionKey)
        console.log(result)
      })
    console.log()
  } else {
    console.log(`Unable to load module: ${modulePath}`)
  }
}

runSolution()
