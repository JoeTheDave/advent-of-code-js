// Project Euler | Problem 96 | Su Doku
// https://projecteuler.net/problem=96

import { readFileSync } from 'fs'
import _ from 'lodash'

export const displayName = 'EULER | Problem 96 | Su Doku'
export const complete = false

const processRawData = (rawData: string) =>
  rawData
    .split('Grid ')
    .slice(1)
    .map(grouping => grouping.split('\n').slice(1))
    .map(grouping => (grouping.length > 9 ? grouping.slice(0, -1) : grouping))
    .map(grouping => grouping.join(''))

class Cell {
  id: number
  assignment: number
  rowId: number
  colId: number
  gridId: number
  gridRowId: number
  gridColId: number
  rowAssociations: Cell[]
  colAssociations: Cell[]
  gridAssociations: Cell[]
  allAssociations: Cell[]

  constructor(n: number, id: number) {
    this.id = id
    this.assignment = n
    this.rowId = Math.floor(id / 9)
    this.colId = id % 9
    const rowGroup = Math.floor(id / 27)
    const colGroup = Math.floor((id % 9) / 3)
    this.gridId = rowGroup * 3 + colGroup
    this.gridRowId = Math.floor(this.gridId / 3)
    this.gridColId = this.gridId % 3
    this.rowAssociations = []
    this.colAssociations = []
    this.gridAssociations = []
    this.allAssociations = []
  }
}

class Sudoku {
  cells: Cell[]

  constructor(puzzle: string) {
    this.cells = puzzle
      .split('')
      .map((num, idx) => new Cell(parseInt(num), idx))
    this.establishCellRelationships()
  }

  establishCellRelationships = () => {
    this.cells.forEach(cell => {
      cell.rowAssociations = this.cells.filter(
        c => c.rowId === cell.rowId && c.id !== cell.id,
      )
      cell.colAssociations = this.cells.filter(
        c => c.colId === cell.colId && c.id !== cell.id,
      )
      cell.gridAssociations = this.cells.filter(
        c => c.gridId === cell.gridId && c.id !== cell.id,
      )
      cell.allAssociations = _.uniq([
        ...cell.rowAssociations,
        ...cell.colAssociations,
        ...cell.gridAssociations,
      ])
    })
  }

  draw = () => {
    console.log('\x1b[2J\x1b[0;0H') // Clear the console
    this.cells.forEach(cell => {
      if (cell.assignment) {
        const x = 5 + cell.colId * 2 + cell.gridColId * 2
        const y = 5 + cell.rowId * 2 + cell.gridRowId * 2
        console.log(`\x1b[${y};${x}H`, `${cell.assignment}`)
      }
    })
    console.log()
  }
}

export const solution = () => {
  const rawData = readFileSync(`${__dirname}/sudoku.txt`, 'utf8')
  const sudokuPuzzles = processRawData(rawData)

  const test = new Sudoku(sudokuPuzzles[0])
  test.draw()

  // console.log('\x1b[2J\x1b[0;0H') // Clear the console

  // // Write text at specific coordinates
  // console.log('\x1b[10;10H', 'Text at (10, 10)')
  // console.log('\x1b[5;20H', 'Text at (5, 20)')

  // // Write colored text at specific coordinates
  // console.log('\x1b[15;5H\x1b[31m', 'Red text at (15, 5)')
  // console.log('\x1b[15;10H\x1b[32m', 'Green text at (20, 10)')
  // console.log('\x1b[25;15H\x1b[33m', 'Yellow text at (25, 15)')
  // console.log('\x1b[0m') // Reset color

  return null
}
