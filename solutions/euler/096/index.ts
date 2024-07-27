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
  fixed: boolean
  marks: Set<number>
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
    this.fixed = n !== 0
    this.marks = new Set()
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

  setAssignment = (n: number) => {
    this.assignment = n
    this.marks.clear()
    this.allAssociations.forEach(cell => cell.marks.delete(n))
  }
}

class Sudoku {
  cells: Cell[]
  rows: Cell[][]
  cols: Cell[][]
  grids: Cell[][]
  allSectors: Cell[][]
  iterations: number

  constructor(puzzle: string) {
    this.cells = puzzle.split('').map((num, idx) => new Cell(parseInt(num), idx))
    this.rows = []
    this.cols = []
    this.grids = []
    this.allSectors = []
    this.iterations = 0
    this.establishCellRelationships()
    this.establishSectorGroupings()
  }

  establishCellRelationships = () => {
    this.cells.forEach(cell => {
      cell.rowAssociations = this.cells.filter(c => c.rowId === cell.rowId && c.id !== cell.id)
      cell.colAssociations = this.cells.filter(c => c.colId === cell.colId && c.id !== cell.id)
      cell.gridAssociations = this.cells.filter(c => c.gridId === cell.gridId && c.id !== cell.id)
      cell.allAssociations = _.uniq([...cell.rowAssociations, ...cell.colAssociations, ...cell.gridAssociations])
    })
  }

  establishSectorGroupings = () => {
    for (let i = 0; i < 9; i++) {
      this.rows.push(this.cells.filter(cell => cell.rowId === i))
      this.cols.push(this.cells.filter(cell => cell.colId === i))
      this.grids.push(this.cells.filter(cell => cell.gridId === i))
    }
    this.allSectors = [...this.rows, ...this.cols, ...this.grids]
  }

  initializeMarks = () => {
    this.cells.forEach(cell => {
      if (!cell.assignment) {
        for (let i = 1; i <= 9; i++) {
          cell.marks.add(i)
        }
      }
    })

    for (let i = 1; i <= 9; i++) {
      this.cells
        .filter(cell => cell.assignment === i)
        .reduce((collective, cell) => {
          return _.uniq([...collective, ...cell.allAssociations])
        }, [] as Cell[])
        .forEach(cell => cell.marks.delete(i))
      this.cells.filter
    }
  }

  emptyCount = () => {
    return this.cells.filter(cell => !cell.assignment).length
  }

  validateSolution = () => {
    let valid = true
    this.allSectors.forEach(sector => {
      _.range(1, 10).forEach(num => {
        if (sector.filter(cell => cell.assignment === num).length !== 1) {
          valid = false
        }
      })
    })
    return valid
  }

  strategySingleMarkCells = () => {
    this.cells.filter(cell => cell.marks.size === 1).forEach(cell => cell.setAssignment(Array.from(cell.marks)[0]))
  }

  strategyLastRemainingNumberOptionInSector = () => {
    for (let i = 1; i <= 9; i++) {
      this.allSectors.forEach(sector => {
        const cellsWithMark = sector.filter(cell => cell.marks.has(i))
        if (cellsWithMark.length === 1) {
          cellsWithMark[0].setAssignment(i)
        }
      })
    }
  }

  strategyEliminateSkeweredMarks = () => {
    _.range(9).forEach(gridId => {
      _.range(1, 10).forEach(num => {
        const gridCellsWithMark = this.grids[gridId].filter(cell => cell.marks.has(num))
        const [possibilityRows, possibilityCols] = gridCellsWithMark.reduce(
          (collection, option) => [_.uniq([...collection[0], option.rowId]), _.uniq([...collection[1], option.colId])],
          [[], []] as number[][],
        )
        if (possibilityRows.length === 1) {
          this.rows[possibilityRows[0]].forEach(rowCell => {
            if (rowCell.gridId !== gridId && rowCell.marks.has(num)) {
              rowCell.marks.delete(num)
            }
          })
        }
        if (possibilityCols.length === 1) {
          this.cols[possibilityCols[0]].forEach(colCell => {
            if (colCell.gridId !== gridId && colCell.marks.has(num)) {
              colCell.marks.delete(num)
            }
          })
        }
      })
    })
  }

  solve = () => {
    let emptyCount = 81
    this.initializeMarks()
    do {
      emptyCount = this.emptyCount()
      this.iterations++
      this.strategySingleMarkCells() // Solves 12
      this.strategyLastRemainingNumberOptionInSector() // Solves 38
      this.strategyEliminateSkeweredMarks()
    } while (this.emptyCount() !== emptyCount)
  }

  draw = () => {
    // const showMarks = [4]
    const showMarks = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log('\x1b[2J\x1b[0;0H') // Clear the console
    console.log('╔═══════╤═══════╤═══════╦═══════╤═══════╤═══════╦═══════╤═══════╤═══════╗')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('╟───────┼───────┼───────╫───────┼───────┼───────╫───────┼───────┼───────╢')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('╟───────┼───────┼───────╫───────┼───────┼───────╫───────┼───────┼───────╢')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('╠═══════╪═══════╪═══════╬═══════╪═══════╪═══════╬═══════╪═══════╪═══════╣')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('╟───────┼───────┼───────╫───────┼───────┼───────╫───────┼───────┼───────╢')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('╟───────┼───────┼───────╫───────┼───────┼───────╫───────┼───────┼───────╢')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('╠═══════╪═══════╪═══════╬═══════╪═══════╪═══════╬═══════╪═══════╪═══════╣')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('╟───────┼───────┼───────╫───────┼───────┼───────╫───────┼───────┼───────╢')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('╟───────┼───────┼───────╫───────┼───────┼───────╫───────┼───────┼───────╢')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('║       │       │       ║       │       │       ║       │       │       ║')
    console.log('╚═══════╧═══════╧═══════╩═══════╧═══════╧═══════╩═══════╧═══════╧═══════╝')

    this.cells.forEach(cell => {
      const x = 4 + cell.colId * 8
      const y = 4 + cell.rowId * 4
      const markColor = '34'
      if (cell.assignment) {
        console.log(`\x1b[${y};${x}H\x1b[${cell.fixed ? '31' : '32'}m`, `${cell.assignment}`)
      } else {
        cell.marks.forEach(mark => {
          if (mark === 1 && showMarks.includes(1)) {
            console.log(`\x1b[${y - 1};${x - 2}H\x1b[${markColor}m`, `${mark}`)
          }
          if (mark === 2 && showMarks.includes(2)) {
            console.log(`\x1b[${y - 1};${x}H\x1b[${markColor}m`, `${mark}`)
          }
          if (mark === 3 && showMarks.includes(3)) {
            console.log(`\x1b[${y - 1};${x + 2}H\x1b[${markColor}m`, `${mark}`)
          }
          if (mark === 4 && showMarks.includes(4)) {
            console.log(`\x1b[${y};${x - 2}H\x1b[${markColor}m`, `${mark}`)
          }
          if (mark === 5 && showMarks.includes(5)) {
            console.log(`\x1b[${y};${x}H\x1b[${markColor}m`, `${mark}`)
          }
          if (mark === 6 && showMarks.includes(6)) {
            console.log(`\x1b[${y};${x + 2}H\x1b[${markColor}m`, `${mark}`)
          }
          if (mark === 7 && showMarks.includes(7)) {
            console.log(`\x1b[${y + 1};${x - 2}H\x1b[${markColor}m`, `${mark}`)
          }
          if (mark === 8 && showMarks.includes(8)) {
            console.log(`\x1b[${y + 1};${x}H\x1b[${markColor}m`, `${mark}`)
          }
          if (mark === 9 && showMarks.includes(9)) {
            console.log(`\x1b[${y + 1};${x + 2}H\x1b[${markColor}m`, `${mark}`)
          }
        })
      }
    })
    console.log('\x1b[0m')
    console.log()
    console.log()
    console.log(`Empty Count: ${this.emptyCount()}, Iterations: ${this.iterations}`)

    // console.log('\x1b[2J\x1b[0;0H') // Clear the console

    // // Write text at specific coordinates
    // console.log('\x1b[10;10H', 'Text at (10, 10)')
    // console.log('\x1b[5;20H', 'Text at (5, 20)')

    // // Write colored text at specific coordinates
    // console.log('\x1b[15;5H\x1b[31m', 'Red text at (15, 5)')
    // console.log('\x1b[15;10H\x1b[32m', 'Green text at (20, 10)')
    // console.log('\x1b[25;15H\x1b[33m', 'Yellow text at (25, 15)')
    // console.log('\x1b[0m') // Reset color
  }
}

const solvePuzzles = (puzzles: string[]) =>
  puzzles.map((puzzle, idx) => {
    const sudoku = new Sudoku(puzzle)
    sudoku.solve()
    const unsolvedCellsCount = sudoku.emptyCount()
    return {
      idx,
      solved: unsolvedCellsCount === 0,
      unsolvedCellsCount,
      // iterations: sudoku.iterations,
      invalid: unsolvedCellsCount === 0 && sudoku.validateSolution(),
    }
  })

export const solution = () => {
  const rawData = readFileSync(`${__dirname}/sudoku.txt`, 'utf8')
  const sudokuPuzzles = processRawData(rawData)

  const results = solvePuzzles(sudokuPuzzles)
  console.log(results)
  console.log(`Total Solved: ${results.filter(p => p.solved).length}`)

  // const sudoku = new Sudoku(sudokuPuzzles[5])
  // sudoku.solve()
  // sudoku.draw()

  return null
}
