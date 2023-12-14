import data, { testData } from './data'

// Hot Springs

// https://adventofcode.com/2023/day/12
// https://adventofcode.com/2023/day/12/input

export const getUnknownIndexList = (input: string) => {
  const list = []
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '?') {
      list.push(i)
    }
  }
  return list
}

export const bruteForceSolutionification = (dataLines: string[]) => {
  return dataLines
    .map(dataLine => {
      const [springs, numbers] = dataLine.split(' ')
      const arrangements = JSON.stringify(numbers.split(',').map(n => parseInt(n)))
      const unknowns = getUnknownIndexList(springs)
      let validConfigurations = 0
      const possibilities = 2 ** unknowns.length
      let nextReport = 5
      let completion = 0
      for (let n = 0; n < possibilities; n++) {
        const replacementMask = n.toString(2).padStart(unknowns.length, '0').split('')
        const springList = springs.split('')
        unknowns.forEach((ui, i) => (springList[ui] = replacementMask[i] === '1' ? '#' : '.'))
        const config = JSON.stringify((springList.join('').match(/\#+/g) || []).map(n => n.length))
        if (config === arrangements) {
          validConfigurations++
        }
        completion = (n / possibilities) * 100
        if (completion > nextReport) {
          console.log(completion)
          nextReport += 5
        }
      }
      console.log(validConfigurations, dataLine)
      return validConfigurations
    })
    .reduce((sum, num) => sum + num, 0)
}

export const unfoldData = (dataLine: string) => {
  const [springs, numbers] = dataLine.split(' ')
  return `${Array(5).fill(springs).join('?')} ${Array(5).fill(numbers).join(',')}`
}

export const solutionOne = () => {
  return null
  // return bruteForceSolutionification(testData)
}

export const solutionTwo = () => {
  const unfolded = testData.map(d => unfoldData(d))
  console.log(unfolded)
  return null
}
