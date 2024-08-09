// Project Euler | Problem 96 | Su Doku
// https://projecteuler.net/problem=96

import { readFileSync } from 'fs'
import { uniq, range, intersection } from 'lodash'
import { getCombinations } from '@/lib/sequence'
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
      cell.allAssociations = uniq([...cell.rowAssociations, ...cell.colAssociations, ...cell.gridAssociations])
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
          return uniq([...collective, ...cell.allAssociations])
        }, [] as Cell[])
        .forEach(cell => cell.marks.delete(i))
      this.cells.filter
    }
  }

  emptyCount = () => {
    return this.cells.filter(cell => !cell.assignment).length
  }

  marksCount = () => {
    return this.cells.reduce((sum, cell) => sum + cell.marks.size, 0)
  }

  validateSolution = () => {
    let valid = true
    this.allSectors.forEach(sector => {
      range(1, 10).forEach(num => {
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
    range(9).forEach(gridId => {
      range(1, 10).forEach(num => {
        const gridCellsWithMark = this.grids[gridId].filter(cell => cell.marks.has(num))
        const [possibilityRows, possibilityCols] = gridCellsWithMark.reduce(
          (collection, option) => [uniq([...collection[0], option.rowId]), uniq([...collection[1], option.colId])],
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

  strategyEliminateDoubleSkeweredMarks = () => {
    for (let a = 0; a <= 2; a++) {
      for (let b = 0; b <= 2; b++) {
        const gridRow = range(a * 3, a * 3 + 3)
        const gridRowTarget = gridRow[b]
        const gridRowSources = gridRow.filter(id => id !== gridRowTarget)

        const gridCol = range(a, 9, 3)
        const gridColTarget = gridCol[b]
        const gridColSources = gridCol.filter(id => id !== gridColTarget)

        for (let n = 1; n <= 9; n++) {
          const rowGridOneRows = uniq(
            this.grids[gridRowSources[0]].filter(cell => cell.marks.has(n)).map(cell => cell.rowId),
          )
          const rowGridTwoRows = uniq(
            this.grids[gridRowSources[1]].filter(cell => cell.marks.has(n)).map(cell => cell.rowId),
          )
          if (rowGridOneRows.length === 2 && rowGridTwoRows.length === 2) {
            const pointingRows = intersection(rowGridOneRows, rowGridTwoRows)
            if (pointingRows.length === 2) {
              this.grids[gridRowTarget]
                .filter(cell => (cell.rowId === pointingRows[0] || cell.rowId === pointingRows[1]) && cell.marks.has(n))
                .forEach(cell => cell.marks.delete(n))
            }
          }

          const colGridOneCols = uniq(
            this.grids[gridColSources[0]].filter(cell => cell.marks.has(n)).map(cell => cell.colId),
          )
          const colGridTwoCols = uniq(
            this.grids[gridColSources[1]].filter(cell => cell.marks.has(n)).map(cell => cell.colId),
          )
          if (colGridOneCols.length === 2 && colGridTwoCols.length === 2) {
            const pointingCols = intersection(colGridOneCols, colGridTwoCols)
            if (pointingCols.length === 2) {
              this.grids[gridColTarget]
                .filter(cell => (cell.colId === pointingCols[0] || cell.colId === pointingCols[1]) && cell.marks.has(n))
                .forEach(cell => cell.marks.delete(n))
            }
          }
        }
      }
    }
  }

  strategyNakedSets = () => {
    this.allSectors.forEach(sector => {
      range(2, 5).forEach(setSize => {
        const potentialMatches = sector.filter(cell => cell.marks.size === setSize)
        const uniqSets = potentialMatches.reduce((matches, cell) => {
          const cellMatches = potentialMatches.filter(
            cellMatch => intersection(Array.from(cellMatch.marks), Array.from(cell.marks)).length === setSize,
          )
          if (cellMatches.length === setSize) {
            matches[Array.from(cell.marks).sort().join('')] = cellMatches
          }
          return matches
        }, {} as { [key: string]: Cell[] })
        Object.keys(uniqSets).forEach(setKey => {
          const set = uniqSets[setKey]
          const values = setKey.split('').map(n => parseInt(n))
          sector.forEach(cell => {
            if (!set.includes(cell)) {
              values.forEach(val => cell.marks.delete(val))
            }
          })
        })
      })
    })
  }

  strategyHiddenSets = () => {
    // Hidden pair (4,9) in col 7
    this.allSectors.forEach(sector => {
      range(2, 5).forEach(setSize => {
        const numberGroupings = range(1, 10).reduce((numberGroups, num) => {
          const cellsWithMark = sector.filter(cell => cell.marks.has(num))
          if (cellsWithMark.length === setSize) {
            numberGroups[`${num}`] = cellsWithMark
          }
          return numberGroups
        }, {} as { [key: string]: Cell[] })
        const groupingKeys = Object.keys(numberGroupings)
        if (groupingKeys.length === setSize) {
          const groupingSignatures = groupingKeys.map(key =>
            numberGroupings[key]
              .map(cell => cell.id)
              .sort()
              .join('|'),
          )
          if (groupingSignatures.every(signature => signature === groupingSignatures[0])) {
            numberGroupings[groupingKeys[0]].forEach(cell => {
              range(1, 10)
                .filter(n => !groupingKeys.includes(`${n}`))
                .forEach(n => cell.marks.delete(n))
            })
          }
        }
      })
    })
  }

  strategyXWing = () => {
    // Step 9: X-Wing in cells ( A6 , A9 , I6 , I9 )
    // The candidate value 6 must be in one of these cells.
    // Actions:
    // Candidate 6 removed from cells ( G6, D9, G9 )

    range(1, 10).forEach(num => {
      const potentialRows = this.rows
        .map(row => row.filter(cell => cell.marks.has(num)))
        .filter(row => row.length === 2)

      if (potentialRows.length >= 2) {
        getCombinations(range(potentialRows.length), 2).forEach(potentialRowIdxs => {
          const [row1, row2] = potentialRowIdxs
          if (
            potentialRows[row1][0].colId === potentialRows[row2][0].colId &&
            potentialRows[row1][1].colId === potentialRows[row2][1].colId
          ) {
            const targetColIds = [potentialRows[row1][0].colId, potentialRows[row1][1].colId]
            const sourceRowIds = [potentialRows[row1][0].rowId, potentialRows[row2][0].rowId]

            targetColIds.forEach(colId => {
              this.cols[colId].filter(cell => !sourceRowIds.includes(cell.id)).forEach(cell => cell.marks.delete(num))
            })
          }
        })
      }
    })
  }

  solve = () => {
    let emptyCount = 81
    let markCount = 81 * 9
    this.initializeMarks()
    do {
      emptyCount = this.emptyCount()
      markCount = this.marksCount()
      this.iterations++
      this.strategySingleMarkCells() // Solves 12
      this.strategyLastRemainingNumberOptionInSector() // Solves 40
      this.strategyEliminateSkeweredMarks() // Solves 43
      this.strategyEliminateDoubleSkeweredMarks() // Solves 44
      this.strategyNakedSets() // Solves 48
      this.strategyHiddenSets() // Solves 48
    } while (this.emptyCount() !== emptyCount || this.marksCount() !== markCount)
    // this.strategyXWing()
  }

  draw = (showMarks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => {
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
        console.log(`\x1b[${y};${x}H\x1b[47;1m\x1b[${cell.fixed ? '31' : '32'}m`, `${cell.assignment}`)
        console.log(`\x1b[0m`)
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
      invalid: unsolvedCellsCount === 0 && !sudoku.validateSolution(),
    }
  })

export const solution = () => {
  const rawData = readFileSync(`${__dirname}/sudoku.txt`, 'utf8')
  const sudokuPuzzles = processRawData(rawData)

  const solveAll = false
  const targetPuzzle = 6
  const draw = true
  if (solveAll) {
    const results = solvePuzzles(sudokuPuzzles)
    console.log(results.filter(p => p.solved))
    console.log(results.filter(p => !p.solved))
    console.log(`Total Solved: ${results.filter(p => p.solved).length}`)
  } else {
    const sudoku = new Sudoku(sudokuPuzzles[targetPuzzle])
    sudoku.solve()
    if (draw) {
      sudoku.draw()
    }
  }

  return null
}
