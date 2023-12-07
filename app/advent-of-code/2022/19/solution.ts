import data from './data'

// Not Enough Minerals

// https://adventofcode.com/2022/day/19
// https://adventofcode.com/2022/day/19/input

export type Resource = 'ore' | 'clay' | 'obsidian' | 'geode'
export type ResourceCost = { [Key: string]: number }

export interface Blueprint {
  id: number
  ore: ResourceCost
  clay: ResourceCost
  obsidian: ResourceCost
  geode: ResourceCost
}

export const prepareBlueprints = (data: string[]) => {
  return data.map(row => {
    const [name, costs] = row.split(':')
    const id = parseInt(name.split(' ')[1])
    const [ore, clay, obsidian, geode] = costs
      .split('.')
      .filter(d => !!d)
      .map(l =>
        l
          .split(' costs ')[1]
          .split(' and ')
          .reduce((cost, resource) => {
            const costInfo = resource.split(' ')
            const num = parseInt(costInfo[0])
            const resourceType = costInfo[1] as Resource
            cost[resourceType] = num
            return cost
          }, {} as ResourceCost),
      )

    return {
      id,
      ore,
      clay,
      obsidian,
      geode,
    }
  })
}

// export const filterBranches = (simulationBranches: BlueprintSimulation[]) => {
//   const averageBranchBots = Math.floor(
//     simulationBranches
//       .map(branch => branch.geodeBots)
//       .reduce((sum, num) => sum + num, 0) / simulationBranches.length,
//   )
//   console.log(averageBranchBots)
//   return simulationBranches.filter(b => b.geodeBots > averageBranchBots)
// }

export const simulateBlueprintOperation = (blueprint: Blueprint) => {
  let simulationBranches: BlueprintSimulation[] = []
  const initialSimulationState = new BlueprintSimulation(undefined, blueprint)
  simulationBranches.push(initialSimulationState)
  for (let i = 0; i < 24; i++) {
    console.log(`${i} - ${simulationBranches.length}`)
    const newBranches: BlueprintSimulation[] = []
    simulationBranches.forEach(simBranch => {
      simBranch.advanceCycle()
      if (simBranch.canManufactureOreBot()) {
        const newBranch = new BlueprintSimulation(simBranch)
        newBranch.manufactureOreBot()
        newBranches.push(newBranch)
      }
      if (simBranch.canManufactureClayBot()) {
        const newBranch = new BlueprintSimulation(simBranch)
        newBranch.manufactureClayBot()
        newBranches.push(newBranch)
      }
      if (simBranch.canManufactureObsidianBot()) {
        const newBranch = new BlueprintSimulation(simBranch)
        newBranch.manufactureObsidianBot()
        newBranches.push(newBranch)
      }
      if (simBranch.canManufactureGeodeBot()) {
        const newBranch = new BlueprintSimulation(simBranch)
        newBranch.manufactureGeodeBot()
        newBranches.push(newBranch)
      }
    })

    simulationBranches = [...simulationBranches, ...newBranches]
    // if (i > 15) {
    //   simulationBranches = filterBranches(simulationBranches)
    // }
  }
  return simulationBranches.length

  // find best simulation and return geode count
}

class BlueprintSimulation {
  blueprintId: number
  oreBots: number
  clayBots: number
  obsidianBots: number
  geodeBots: number
  manufacturing: string | null
  ore: number
  clay: number
  obsidian: number
  geode: number
  cycles: number
  oreBotCost: ResourceCost
  clayBotCost: ResourceCost
  obsidianBotCost: ResourceCost
  geodeBotCost: ResourceCost

  constructor(sim?: BlueprintSimulation, bluePrint?: Blueprint) {
    if (bluePrint) {
      this.blueprintId = bluePrint.id
      this.oreBots = 1
      this.clayBots = 0
      this.obsidianBots = 0
      this.geodeBots = 0
      this.manufacturing = null
      this.ore = 0
      this.clay = 0
      this.obsidian = 0
      this.geode = 0
      this.cycles = 0
      this.oreBotCost = bluePrint.ore
      this.clayBotCost = bluePrint.clay
      this.obsidianBotCost = bluePrint.obsidian
      this.geodeBotCost = bluePrint.geode
    } else if (sim) {
      this.blueprintId = sim.blueprintId
      this.oreBots = sim.oreBots
      this.clayBots = sim.clayBots
      this.obsidianBots = sim.obsidianBots
      this.geodeBots = sim.geodeBots
      this.manufacturing = sim.manufacturing
      this.ore = sim.ore
      this.clay = sim.clay
      this.obsidian = sim.obsidian
      this.geode = sim.geode
      this.cycles = sim.cycles
      this.oreBotCost = sim.oreBotCost
      this.clayBotCost = sim.clayBotCost
      this.obsidianBotCost = sim.obsidianBotCost
      this.geodeBotCost = sim.geodeBotCost
    } else {
      this.blueprintId = -1
      this.oreBots = 0
      this.clayBots = 0
      this.obsidianBots = 0
      this.geodeBots = 0
      this.manufacturing = null
      this.ore = 0
      this.clay = 0
      this.obsidian = 0
      this.geode = 0
      this.cycles = 0
      this.oreBotCost = {}
      this.clayBotCost = {}
      this.obsidianBotCost = {}
      this.geodeBotCost = {}
    }
  }
  advanceCycle() {
    this.cycles++
    this.completeManufacturing()
    this.produce()
  }
  completeManufacturing() {
    if (this.manufacturing) {
      if (this.manufacturing === 'oreBot') {
        this.oreBots++
      } else if (this.manufacturing === 'clayBot') {
        this.clayBots++
      } else if (this.manufacturing === 'obsidianBot') {
        this.obsidianBots++
      } else if (this.manufacturing === 'geodeBot') {
        this.geodeBots++
      }
      this.manufacturing = null
    }
  }
  produce() {
    this.ore += this.oreBots
    this.clay += this.clayBots
    this.obsidian += this.obsidianBots
    this.geode += this.geodeBots
  }
  canManufactureOreBot() {
    return this.ore >= this.oreBotCost.ore
  }
  manufactureOreBot() {
    if (this.ore >= this.oreBotCost.ore) {
      this.ore -= this.oreBotCost.ore
      this.manufacturing = 'oreBot'
    }
  }
  canManufactureClayBot() {
    return this.ore >= this.clayBotCost.ore
  }
  manufactureClayBot() {
    if (this.ore >= this.clayBotCost.ore) {
      this.ore -= this.clayBotCost.ore
      this.manufacturing = 'clayBot'
    }
  }
  canManufactureObsidianBot() {
    return this.ore >= this.obsidianBotCost.ore && this.clay >= this.obsidianBotCost.clay
  }
  manufactureObsidianBot() {
    if (this.ore >= this.obsidianBotCost.ore && this.clay >= this.obsidianBotCost.clay) {
      this.ore -= this.obsidianBotCost.ore
      this.clay -= this.obsidianBotCost.clay
      this.manufacturing = 'clayBot'
    }
  }
  canManufactureGeodeBot() {
    return this.ore >= this.geodeBotCost.ore && this.obsidian >= this.geodeBotCost.obsidian
  }
  manufactureGeodeBot() {
    if (this.ore >= this.geodeBotCost.ore && this.obsidian >= this.geodeBotCost.obsidian) {
      this.ore -= this.geodeBotCost.ore
      this.obsidian -= this.geodeBotCost.obsidian
      this.manufacturing = 'clayBot'
    }
  }
  getBotCount() {
    return this.oreBots + this.clayBots + this.obsidianBots + this.geodeBots
  }
}

export const solutionOne = () => {
  const blueprints = prepareBlueprints(data)
  const simulationResults = blueprints.map(b => simulateBlueprintOperation(b))
  console.log(simulationResults)
  return null
}

export const solutionTwo = () => {
  return null
}
