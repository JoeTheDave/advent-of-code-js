import chalk from 'chalk'
import { existsSync, rmSync, readdirSync } from 'fs'
import db from '../lib/db'

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
    const yearPath = `${__dirname}/../app/advent-of-code/${year}`
    const dayPath = `${yearPath}/${day}`

    if (existsSync(dayPath)) {
      rmSync(dayPath, { recursive: true, force: true })
    }
    if (readdirSync(yearPath).length === 0) {
      rmSync(yearPath, { recursive: true, force: true })
    }
    db.updateAdventData()
  } catch (e) {
    console.log(chalk.greenBright(e))
  }
}
