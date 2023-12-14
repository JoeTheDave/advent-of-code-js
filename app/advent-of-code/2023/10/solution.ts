import { compact } from 'lodash'
import data, { testData } from './data'

// Pipe Maze

// https://adventofcode.com/2023/day/10
// https://adventofcode.com/2023/day/10/input

// console.log(data)

export class NodeCorner {
  status: boolean | null
  connectedCorners: NodeCorner[]

  constructor() {
    this.status = null
    this.connectedCorners = []
  }

  propagateValue = () => {
    this.connectedCorners.forEach(corner => (corner.status = this.status))
  }
}

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
  ne: NodeCorner
  se: NodeCorner
  sw: NodeCorner
  nw: NodeCorner

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
    this.ne = new NodeCorner()
    this.se = new NodeCorner()
    this.sw = new NodeCorner()
    this.nw = new NodeCorner()
    this.establishCornerAssociations()
  }

  getNeighboringNodes = () => compact([this.north, this.east, this.south, this.west])

  associateCorners = (corners: NodeCorner[]) => {
    for (let a = 0; a < corners.length - 1; a++) {
      for (let b = a + 1; b < corners.length; b++) {
        corners[a].connectedCorners.push(corners[b])
        corners[b].connectedCorners.push(corners[a])
      }
    }
  }

  establishCornerAssociations = () => {
    switch (this.nodeType) {
      case '|':
        this.associateCorners([this.ne, this.se])
        this.associateCorners([this.nw, this.sw])
        break
      case '-':
        this.associateCorners([this.nw, this.ne])
        this.associateCorners([this.sw, this.se])
        break
      case 'L':
        this.associateCorners([this.nw, this.sw, this.se])
        break
      case 'J':
        this.associateCorners([this.ne, this.se, this.sw])
        break
      case '7':
        this.associateCorners([this.nw, this.ne, this.se])
        break
      case 'F':
        this.associateCorners([this.sw, this.nw, this.ne])
        break
      default:
    }
  }

  determineNodeType = () => {
    const connectedNorth = this.connectionNodes.includes(this.north as NetworkNode)
    const connectedEast = this.connectionNodes.includes(this.east as NetworkNode)
    const connectedSouth = this.connectionNodes.includes(this.south as NetworkNode)
    const connectedWest = this.connectionNodes.includes(this.west as NetworkNode)
  }
}

export class Network {
  network: NetworkNode[]
  startNode: NetworkNode

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
    this.startNode = this.network.find(n => n.nodeType === 'S') as NetworkNode
    this.startNode.connectionNodes = this.startNode
      .getNeighboringNodes()
      .filter(n => n.connectionNodes.includes(this.startNode))
  }

  mapPath = () => {
    this.startNode.step = 0
    let leads = this.network.filter(n => n.connectionNodes.includes(this.startNode))
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
  const pipeNetwork = new Network(data)
  return pipeNetwork.mapPath()
}

export const solutionTwo = () => {
  const pipeNetwork = new Network(data)
  return pipeNetwork.mapPath()
}
