import { readFileSync, writeFileSync, existsSync } from 'fs'

export interface AdventDayDetail {
  year: number
  day: number
  stars: number
  generated: boolean
  name: string
}

export type AdventData = {
  [key: number]: {
    [key: number]: AdventDayDetail
  }
}

const jsonFilePath = `${__dirname}/../lib/appData.json`
const appPath = `${__dirname}/../app/advent-of-code`

export const getAdventData = () => {
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
        console.log(dynamicModule)
        data[year][day].name = dynamicModule['adventTitle']
      }
    }
  }
  writeFileSync(jsonFilePath, JSON.stringify(data, null, 2))
  return data
}

export default {
  getAdventData,
}
