// https://adventofcode.com/2015/day/14
// https://adventofcode.com/2015/day/14/input

import { puzzleData, testData } from './data'

const reindeerOlympics = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

interface Statistics {
  name: string
  speed: number
  duration: number
  rest: number
  distance: number
  score: number
  timer: number
}

const compileContenderStatistics = (data: string[]) => {
  return data.map(contender => {
    const [name, speed, duration, rest] = contender
      .replace(' can fly ', ' ')
      .replace(' km/s for ', ' ')
      .replace(' seconds, but then must rest for ', ' ')
      .replace(' seconds.', '')
      .split(' ')
    return {
      name,
      speed: parseInt(speed),
      duration: parseInt(duration),
      rest: parseInt(rest),
      distance: 0,
      score: 0,
      timer: parseInt(duration),
    } as Statistics
  })
}

const executeRace = (statistics: Statistics[]) => {
  for (let s = 1; s <= 2503; s++) {
    statistics.forEach(contender => {
      if (contender.timer > 0) {
        contender.distance += contender.speed
        contender.timer--
        if (contender.timer === 0) {
          contender.timer = contender.rest * -1
        }
      } else {
        contender.timer++
        if (contender.timer === 0) {
          contender.timer = contender.duration
        }
      }
    })
    const maxDistance = statistics.reduce(
      (max, contender) => Math.max(max, contender.distance),
      0,
    )
    statistics
      .filter(contender => contender.distance === maxDistance)
      .forEach(contender => contender.score++)
  }
  return statistics
}

const part1 = (data: string[]) => {
  const statistics = compileContenderStatistics(data)
  const results = executeRace(statistics)
  return results.reduce(
    (max, contender) => Math.max(max, contender.distance),
    0,
  )
}

const part2 = (data: string[]) => {
  const statistics = compileContenderStatistics(data)
  const results = executeRace(statistics)
  return results.reduce((max, contender) => Math.max(max, contender.score), 0)
}

export default reindeerOlympics

export const solutionData = {
  puzzleData,
  testData,
}
