import { existsSync } from 'fs'

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

const modulePath = `${__dirname}/../app/${solutionsDir}/${year}/${day}/solution.ts`
console.log(modulePath)
if (existsSync(modulePath)) {
  const dynamicModule = require(modulePath)
  const func = dynamicModule['default']

  console.time(day)
  const result = func()
  console.timeEnd(day)
  console.log(result)
} else {
  throw `No solutions exists for year - ${year}, day - ${day}`
}
