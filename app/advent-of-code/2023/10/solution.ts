import { compact } from 'lodash'
import data, { testData } from './data'

// Pipe Maze

// https://adventofcode.com/2023/day/10
// https://adventofcode.com/2023/day/10/input

// console.log(data)

export class NetworkNode {
  nodeType: string
  x: number
  y: number
  north: NetworkNode | null
  south: NetworkNode | null
  east: NetworkNode | null
  west: NetworkNode | null
  step: number | null
  connectionNodes: NetworkNode[]

  constructor(coords: number[], nodeType: string) {
    const [x, y] = coords
    this.x = x
    this.y = y
    this.nodeType = nodeType
    this.north = null
    this.south = null
    this.east = null
    this.west = null
    this.step = null
    this.connectionNodes = []
  }
}

export class Network {
  network: NetworkNode[]

  constructor(dataMap: string[]) {
    this.network = []
    const dataRowLength = dataMap[0].length

    dataMap.forEach((dataRow, y) => {
      dataRow.split('').forEach((pipe, x) => {
        this.network.push(new NetworkNode([x, y], pipe))
      })
    })
    this.network.forEach(node => {
      if (node.y > 0) {
        node.north = this.network.find(n => n.x === node.x && n.y === node.y - 1) || null
      }
      if (node.x < dataRowLength - 1) {
        node.east = this.network.find(n => n.x === node.x + 1 && n.y === node.y) || null
      }
      if (node.y < dataMap.length - 1) {
        node.south = this.network.find(n => n.x === node.x && n.y === node.y + 1) || null
      }
      if (node.x > 0) {
        node.west = this.network.find(n => n.x === node.x - 1 && n.y === node.y) || null
      }
      switch (node.nodeType) {
        case '|':
          node.connectionNodes = compact([node.north, node.south])
          break
        case '-':
          node.connectionNodes = compact([node.west, node.east])
          break
        case 'L':
          node.connectionNodes = compact([node.north, node.east])
          break
        case 'J':
          node.connectionNodes = compact([node.north, node.west])
          break
        case '7':
          node.connectionNodes = compact([node.south, node.west])
          break
        case 'F':
          node.connectionNodes = compact([node.south, node.east])
          break
        default:
          node.connectionNodes = []
      }
    })
  }

  mapPath = () => {
    const startNode = this.network.find(n => n.nodeType == 'S') as NetworkNode
    startNode.step = 0
    let leads = this.network.filter(n => n.connectionNodes.includes(startNode))
    leads.forEach(lead => (lead.step = 1))

    do {
      const nextStep = (leads[0].step || 0) + 1
      leads = leads.map(lead => lead.connectionNodes.find(l => l.step === null) as NetworkNode)
      leads.forEach(lead => (lead.step = nextStep))
    } while (leads[0] !== leads[1])
    return leads[0].step
  }
}

export const solutionOne = () => {
  const network = new Network(data)
  return network.mapPath()
}

export const solutionTwo = () => {
  const network = new Network(data)
  return network.mapPath()
}
