import data, { testData } from './data'

// Clumsy Crucible

// https://adventofcode.com/2023/day/17
// https://adventofcode.com/2023/day/17/input

export class HeatNode {
  value: number
  x: number
  y: number
  up: HeatNode | null
  down: HeatNode | null
  left: HeatNode | null
  right: HeatNode | null
  pathScores: { [key: string]: number }

  constructor(val: string, x: number, y: number) {
    this.value = parseInt(val)
    this.x = x
    this.y = y
    this.up = null
    this.down = null
    this.left = null
    this.right = null
    this.pathScores = {}
  }

  sendWalker = () => {}

  traverseGrid = () => {}
}

export class Walker {}

export class HeatGrid {
  heatNodes: HeatNode[][]
  startNode: HeatNode
  endNode: HeatNode

  constructor(heatData: string[]) {
    this.heatNodes = []

    for (let y = 0; y < heatData.length; y++) {
      const heatNodesRow: HeatNode[] = []
      for (let x = 0; x < heatData[y].length; x++) {
        heatNodesRow.push(new HeatNode(heatData[y][x], x, y))
      }
      this.heatNodes.push(heatNodesRow)
    }
    for (let y = 0; y < this.heatNodes.length; y++) {
      for (let x = 0; x < this.heatNodes[y].length; x++) {
        if (y > 0) {
          this.heatNodes[y][x].up = this.heatNodes[y - 1][x]
        }
        if (y < this.heatNodes.length - 1) {
          this.heatNodes[y][x].down = this.heatNodes[y + 1][x]
        }
        if (x > 0) {
          this.heatNodes[y][x].left = this.heatNodes[y][x - 1]
        }
        if (x < this.heatNodes[y].length - 1) {
          this.heatNodes[y][x].right = this.heatNodes[y][x + 1]
        }
      }
    }
    this.startNode = this.heatNodes[0][0]
    this.endNode =
      this.heatNodes[this.heatNodes.length - 1][this.heatNodes[0].length - 1]
  }
}

export const solutionOne = () => {
  const heatGrid = new HeatGrid(testData)
  console.log(heatGrid)
  return null
}

export const solutionTwo = () => {
  return null
}
