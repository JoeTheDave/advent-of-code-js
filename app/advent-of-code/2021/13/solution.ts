import { uniq } from 'lodash'
import data from './data'

// Transparent Origami

// https://adventofcode.com/2021/day/13
// https://adventofcode.com/2021/day/13/input

const performFold = (dots: string[], fold: string) => {
  const [dir, val] = fold.split('=')
  const value = parseInt(val)
  const paper: string[] = []
  dots.forEach(d => {
    const [x, y] = d.split(',')
    if (dir === 'x') {
      const xVal = parseInt(x)
      if (xVal > value) {
        paper.push([value - (xVal - value), y].join(','))
      } else {
        paper.push(d)
      }
    } else {
      const yVal = parseInt(y)
      if (yVal > value) {
        paper.push([x, value - (yVal - value)].join(','))
      } else {
        paper.push(d)
      }
    }
  })
  return uniq(paper)
}

const displayResults = (dots: string[]) => {
  const coords = dots.map(d => d.split(',').map(v => parseInt(v)))
  let maxX = 0
  let maxY = 0
  coords.forEach(coord => {
    maxX = Math.max(maxX, coord[0])
    maxY = Math.max(maxY, coord[1])
  })
  const displayGrid: string[] = []
  for (let y = 0; y <= maxY; y++) {
    let displayLine = ''
    for (let x = 0; x <= maxX; x++) {
      const point = [x, y].join(',')
      if (dots.includes(point)) {
        displayLine += '#'
      } else {
        displayLine += '.'
      }
    }
    displayGrid.push(displayLine)
  }
  return displayGrid
}

export const solutionOne = () => {
  const spacer = data.indexOf('')
  const dots = data.slice(0, spacer)
  const fold = data.slice(spacer + 1).map(f => f.replace('fold along ', ''))[0]
  const result = performFold(dots, fold)

  return result.length
}

export const solutionTwo = () => {
  const spacer = data.indexOf('')
  let dots = data.slice(0, spacer)
  const folds = data.slice(spacer + 1).map(f => f.replace('fold along ', ''))
  folds.forEach(fold => {
    dots = performFold(dots, fold)
  })

  const result = displayResults(dots)
  console.log(result)
  return result
}
