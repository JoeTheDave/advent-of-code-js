// Project Euler | Problem 81 | Path Sum: Two Ways
// https://projecteuler.net/problem=81

import { readFileSync } from 'fs'

export const displayName = 'EULER | Problem 81 | Path Sum: Two Ways'
export const complete = true

class GridCell {
  value: number
  x: number
  y: number
  n: GridCell | null
  s: GridCell | null
  e: GridCell | null
  w: GridCell | null
  minPathValue: number

  constructor(v: number, x: number, y: number) {
    this.value = v
    this.x = x
    this.y = y
    this.n = null
    this.s = null
    this.e = null
    this.w = null
    this.minPathValue = 0
  }
}

class Grid {
  cells: GridCell[]

  constructor(rawData: string) {
    this.cells = rawData
      .split('\n')
      .map((row, y) => row.split(',').map((cellValue, x) => new GridCell(parseInt(cellValue), x, y)))
      .reduce((cells, row) => [...cells, ...row], [])
    this.establishCellRelationships()
    const lastCell = this.cells[this.cells.length - 1]
    lastCell.minPathValue = lastCell.value
    this.extrapolateMinPathValues()
  }

  establishCellRelationships = () => {
    this.cells.forEach(cell => {
      cell.n = this.cells.find(c => c.y === cell.y - 1 && c.x === cell.x) || null
      cell.s = this.cells.find(c => c.y === cell.y + 1 && c.x === cell.x) || null
      cell.e = this.cells.find(c => c.y === cell.y && c.x === cell.x + 1) || null
      cell.w = this.cells.find(c => c.y === cell.y && c.x === cell.x - 1) || null
    })
  }

  extrapolateMinPathValues = () => {
    while (this.cells.some(cell => cell.minPathValue === 0)) {
      const actionCells = this.cells.filter(
        cell =>
          cell.minPathValue === 0 && ((cell.s && cell.s?.minPathValue !== 0) || (cell.e && cell.e?.minPathValue !== 0)),
      )
      actionCells.forEach(cell => {
        cell.minPathValue = cell.value + Math.min(cell.s?.minPathValue || 999999, cell.e?.minPathValue || 999999)
      })
    }
  }
}

export const solution = () => {
  const rawData = readFileSync(`${__dirname}/matrix.txt`, 'utf8')
  const grid = new Grid(rawData)
  return grid.cells[0].minPathValue
}
