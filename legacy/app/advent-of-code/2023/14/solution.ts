import data, { testData } from './data'

// Parabolic Reflector Dish

// https://adventofcode.com/2023/day/14
// https://adventofcode.com/2023/day/14/input

export const slideStones = (platform: string[]) => {
  for (let y = 0; y < platform.length; y++) {
    for (let x = 0; x < platform[y].length; x++) {
      if (platform[y][x] === 'O') {
        for (let t = y; t >= 0; t--) {
          if (!platform[t - 1] || platform[t - 1][x] !== '.') {
            if (t !== y) {
              const yRow = platform[y].split('')
              yRow.splice(x, 1, '.')
              platform[y] = yRow.join('')
              const tRow = platform[t].split('')
              tRow.splice(x, 1, 'O')
              platform[t] = tRow.join('')
            }
            break
          }
        }
      }
    }
  }
  return platform
}

export const rotatePlatform = (platform: string[]) => {
  const newPlatform: string[] = []
  for (let c = 0; c < platform.length; c++) {
    newPlatform.push(
      platform
        .map(i => i[c])
        .reverse()
        .join(''),
    )
  }
  return newPlatform
}

export const cylcePlatform = (platform: string[]) => {
  for (let c = 1; c <= 4; c++) {
    platform = slideStones(platform)
    platform = rotatePlatform(platform)
  }
  return platform
}

export const unfoldPlatformKey = (platformKey: string) => {
  const platformDiameter = Math.sqrt(platformKey.length)
  const platform = []
  for (let i = 0; i < platformKey.length; i += platformDiameter) {
    platform.push(platformKey.slice(i, i + platformDiameter))
  }
  return platform
}

export const scorePlatform = (platform: string[]) => {
  const platformDiameter = platform.length
  let score = 0
  for (let y = 0; y < platform.length; y++) {
    for (let x = 0; x < platform[y].length; x++) {
      if (platform[y][x] === 'O') {
        score += platformDiameter - y
      }
    }
  }
  return score
}

export const solutionOne = () => {
  let platform = [...data]
  platform = slideStones(platform)
  return scorePlatform(platform)
}

export const solutionTwo = () => {
  let platform = [...data]
  const cycleStates: { [key: string]: number } = {}
  let cycle = 0
  let continueCycle = true
  let score = 0
  do {
    cycle++
    platform = cylcePlatform(platform)
    const state = platform.join('')
    if (cycleStates.hasOwnProperty(state)) {
      const recurranceLength = cycle - cycleStates[state]
      const startCycle = cycleStates[state]
      const targetCycle = ((1000000000 - startCycle) % recurranceLength) + startCycle
      const platformKey = Object.keys(cycleStates).find(pk => cycleStates[pk] === targetCycle) as string
      score = scorePlatform(unfoldPlatformKey(platformKey))
      continueCycle = false
    } else {
      cycleStates[state] = cycle
    }
  } while (continueCycle)
  return score
}
