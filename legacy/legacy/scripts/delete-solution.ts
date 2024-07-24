import { existsSync, rmSync, readdirSync } from 'fs'
import { generateDynamicImportFile } from './generate-dynamic-import-file'

import dotenv from 'dotenv'

dotenv.config()

const args = process.argv
const solutionsDir = process.env.solutions_dir

if (!args[2] || !args[3]) {
  throw 'You must provide a year and a day'
}
if (args[2].length !== 2 && args[2].length !== 4) {
  throw 'Invalid year provided'
}
const year = args[2].length === 2 ? `20${args[2]}` : args[2]

const day = `${args[3]}`.padStart(2, '0')

const solutionPath = `${__dirname}/../app/${solutionsDir}/${year}/${day}`

console.log(solutionPath)
if (existsSync(solutionPath)) {
  rmSync(solutionPath, { recursive: true, force: true })

  const yearPath = `${__dirname}/../app/${solutionsDir}/${year}`
  const subDirs = readdirSync(yearPath, {
    withFileTypes: true,
  }).filter(dir => dir.isDirectory())
  if (subDirs.length === 0) {
    rmSync(yearPath, { recursive: true, force: true })
  }
  generateDynamicImportFile()
} else {
  throw `Solution for year - ${year}, day - ${day}, does not exist. No action taken.`
}
