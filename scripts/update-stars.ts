import chalk from 'chalk'
import db from '../lib/db'

const args = process.argv.splice(2)

let project = 'aoc'
if (args[0] === 'aoc' || args[0] === 'euler') {
  project = args.shift() as string
}

if (project === 'aoc') {
  try {
    if (isNaN(parseInt(args[0])) || args[0].length !== 4) {
      throw 'Advent of Code: a valid year must be provided'
    }
    if (isNaN(parseInt(args[1])) || args[1].length !== 2) {
      throw 'Advent of Code: a valid day must be provided'
    }
    if (args[2] !== '0' && args[2] !== '1' && args[2] !== '2') {
      throw 'Advent of Code: valid number of stars must be provided (0-2)'
    }
    const [year, day, stars] = args

    const adventData = db.getAdventData()
    if (!adventData[year][`${parseInt(day)}`].generated) {
      throw `Advent of Code: Unable to assign stars. No solutions files exist for year - ${year}, day - ${day}`
    }
    db.updateStars(year, day, parseInt(stars))
  } catch (e) {
    console.log(chalk.greenBright(e))
  }
}
