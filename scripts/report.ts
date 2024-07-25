import { existsSync, readdirSync } from 'fs'
import _ from 'lodash'

const eulerProjectPath = `${__dirname}/../solutions/euler`

const generateReport = async () => {
  const args = process.argv.splice(2)

  if (existsSync(eulerProjectPath)) {
    const eulerProjects = readdirSync(eulerProjectPath).map(dir =>
      parseInt(dir),
    )
    const maxProjNum = Math.max(...eulerProjects)
    const completed = []
    const incomplete = []
    const notGenerated = []
    const error = []
    for (let p = 1; p <= maxProjNum; p++) {
      const projectPath = `${eulerProjectPath}/${_.padStart(`${p}`, 3, '0')}`
      if (existsSync(projectPath)) {
        const projectModulePath = `${projectPath}/index.ts`
        if (existsSync(projectModulePath)) {
          const dynamicModule = require(projectModulePath)
          if (!dynamicModule || dynamicModule['complete'] === 'undefined') {
            error.push(p)
          } else {
            if (dynamicModule['complete']) {
              completed.push(p)
            } else {
              incomplete.push(p)
            }
          }
        } else {
          error.push(p)
        }
      } else {
        notGenerated.push(p)
      }
    }
    const report = {
      completed,
      incomplete,
      notGenerated,
      error,
    }
    const reportCounts = {
      completed: completed.length,
      incomplete: incomplete.length,
      notGenerated: notGenerated.length,
      error: error.length,
    }
    console.log()
    console.log(
      '== Project Euler =========================================================',
    )
    console.log()
    console.log(reportCounts)
    console.log()
    console.log(report)
    console.log()
    console.log(
      '==========================================================================',
    )
    console.log()
  }
}

generateReport()
