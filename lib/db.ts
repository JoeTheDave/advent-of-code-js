import { readFileSync, writeFileSync, existsSync } from 'fs'

export interface AdventDayDetail {
  year: number
  day: number
  stars: number
  generated: boolean
  name: string
}

export type AdventData = {
  [key: string]: {
    [key: string]: AdventDayDetail
  }
}

const jsonFilePath = `${__dirname}/../lib/appData.json`
const appPath = `${__dirname}/../app/advent-of-code`

const writeAdventData = (adventData: AdventData) => {
  writeFileSync(jsonFilePath, JSON.stringify(adventData, null, 2))
}

const getAdventData = () => {
  if (!existsSync(jsonFilePath)) {
    writeFileSync(jsonFilePath, JSON.stringify({}, null, 2))
  }
  const data: AdventData = JSON.parse(readFileSync(jsonFilePath).toString())
  const currentYear = new Date().getFullYear()
  for (let year = 2015; year <= currentYear; year++) {
    if (!data[year]) {
      data[year] = {}
    }
    for (let day = 1; day <= 25; day++) {
      if (!data[year][day]) {
        data[year][day] = {
          year,
          day,
          stars: 0,
          generated: false,
          name: '',
        }
      }
      const dataModulePath = `${appPath}/${year}/${day.toString().padStart(2, '0')}/data.ts`
      if (existsSync(dataModulePath)) {
        data[year][day].generated = true
        const dynamicModule = require(dataModulePath)
        data[year][day].name = dynamicModule['adventTitle']
      } else {
        data[year][day].stars = 0
        data[year][day].generated = false
        data[year][day].name = ''
      }
    }
  }
  writeAdventData(data)
  return data
}

const updateAdventData = () => {
  getAdventData()
}

const updateStars = (year: string, day: string, stars: number) => {
  const data = getAdventData()
  data[year][`${parseInt(day)}`].stars = stars
  writeAdventData(data)
}

export default {
  getAdventData,
  updateAdventData,
  updateStars,
}
