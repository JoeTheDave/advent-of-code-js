import chalk from 'chalk'
import { existsSync } from 'fs'

const args = process.argv.splice(2)

let project = 'aoc'
if (args[0] === 'aoc' || args[0] === 'euler') {
  project = args.shift() as string
}

if (project === 'aoc') {
  try {
    if (isNaN(parseInt(args[0])) || args[0].length !== 4) {
      throw 'Advent of Code: A valid year must be provided'
    }
    if (isNaN(parseInt(args[1])) || args[1].length !== 2) {
      throw 'Advent of Code: A valid day must be provided'
    }
    const [year, day] = args
    const modulePath = `${__dirname}/../app/advent-of-code/${year}/${day}/solution.ts`
    if (existsSync(modulePath)) {
      const dynamicModule = require(modulePath)
      const solutionOne = dynamicModule['solutionOne']
      const solutionTwo = dynamicModule['solutionTwo']

      console.time(day)
      const result = [solutionOne(), solutionTwo()]
      console.timeEnd(day)
      console.log(result)
    } else {
      throw `Advent of Code: No solution files exist for year - ${year}, day - ${day}`
    }
  } catch (e) {
    console.log(chalk.greenBright(e))
  }
}
