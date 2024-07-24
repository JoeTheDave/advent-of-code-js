import axios from 'axios'
import chalk from 'chalk'
import * as cheerio from 'cheerio'
import dotenv from 'dotenv'
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import db from '../lib/db'

dotenv.config()

interface FileData {
  modulePath: string
  year: string
  day: string
  displayName: string
  aocUrl: string
  sessionId: string
}

const sessionId = process.env.sessionId || ''
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
    const [year, day] = args
    const appPath = `${__dirname}/../app/advent-of-code`

    if (!existsSync(`${appPath}/${year}/${day}`)) {
      const displayDay = parseInt(day).toString()
      const aocUrl = `https://adventofcode.com/${year}/day/${displayDay}`
      axios(aocUrl)
        .then(response => {
          const html = response.data
          const $ = cheerio.load(html)
          const displayName = $('h2')
            .text()
            .split(':')[1]
            .replace(' ---', '')
            .trim()
          console.log(
            `Generating Solutions Files for: (Year: ${year} | Day: ${displayDay} | ${displayName})`,
          )
          if (!existsSync(`${appPath}/${year}`)) {
            mkdirSync(`${appPath}/${year}`)
          }
          if (!existsSync(`${appPath}/${year}/${day}`)) {
            mkdirSync(`${appPath}/${year}/${day}`)
          }
          const fileData: FileData = {
            modulePath: `${appPath}/${year}/${day}`,
            year,
            day: displayDay,
            displayName,
            aocUrl,
            sessionId,
          }
          generateSolutionFile(fileData)
          generateIndexFile(fileData)
          generateDataFile(fileData)
          generateHtmlFile(fileData)
          setTimeout(db.updateAdventData, 500)
        })
        .catch(() => {
          throw 'Invalid day requested'
        })
    } else {
      throw `Solutions files already exist for year - ${year}, day - ${day}`
    }
  } catch (e) {
    console.log(chalk.greenBright(e))
  }
}

const generateSolutionFile = (fileData: FileData) => {
  const fileContent = `import data, { testData } from './data'

// ${fileData.displayName}

// ${fileData.aocUrl}
// ${fileData.aocUrl}/input

export const solutionOne = () => {
  return null
}

export const solutionTwo = () => {
  return null
}
`
  writeFileSync(`${fileData.modulePath}/solution.ts`, fileContent)
}

const generateIndexFile = (fileData: FileData) => {
  const fileContent = `import $ from 'jquery'
import data, { testData } from './data'
import { solutionOne, solutionTwo } from './solution'

// Year ${fileData.year} | Day ${fileData.day} | ${fileData.displayName}

$(() => {
  $('#app').html(\`
  <div class="font-mono text-[24px]">
    <div id="solution-one">
      \${solutionOne()}
    </div>
    <div id="solution-two">
      \${solutionTwo()}
    </div>
  </div>
  \`)
})
`
  writeFileSync(`${fileData.modulePath}/index.ts`, fileContent)
}

const generateDataFile = (fileData: FileData) => {
  axios(`${fileData.aocUrl}/input`, {
    headers: {
      Cookie: `session=${sessionId}`,
    },
  })
    .then(response => {
      const data = response.data
      writeDataFile(fileData, data)
    })
    .catch(() => {
      console.log(
        chalk.greenBright(
          'Invalid or missing sessionId - Unable to retreive puzzle data.',
        ),
      )
      writeDataFile(fileData, '')
    })
}

const writeDataFile = (fileData: FileData, puzzleInput: string) => {
  const parsedInput = puzzleInput
    ? `[
${puzzleInput
  .split('\n')
  .map((l: string) => `  '${l}',`)
  .slice(0, -1)
  .join('\n')}
  ]`
    : '[]'

  const fileContent = `export const adventTitle = '${fileData.displayName}'

export const testData = []

const data = ${parsedInput}

export default data
`
  writeFileSync(`${fileData.modulePath}/data.ts`, fileContent)
}

const generateHtmlFile = (fileData: FileData) => {
  const fileContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link rel="stylesheet" href="/lib/styles/tailwind.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Day ${fileData.day}: ${fileData.displayName}</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/app/advent-of-code/${
      fileData.year
    }/${fileData.day.padStart(2, '0')}/index.ts"></script>
  </body>
</html>`
  writeFileSync(`${fileData.modulePath}/index.html`, fileContent)
}
