import data from './data'

// Wait For It

// https://adventofcode.com/2023/day/6
// https://adventofcode.com/2023/day/6/input

const getRaceData = () => {
  const times = (data[0].match(/\d+/g) as string[]).map(s => parseInt(s))
  const distances = (data[1].match(/\d+/g) as string[]).map(s => parseInt(s))
  return [times, distances]
}

export const solutionOne = () => {
  const [times, distances] = getRaceData()
  return times
    .map((time, i) => {
      let solutions = 0
      for (let t = 0; t <= time; t++) {
        if ((time - t) * t > distances[i]) {
          solutions++
        }
      }
      return solutions
    })
    .reduce((product, num) => product * num, 1)
}

export const solutionTwo = () => {
  const [times, distances] = getRaceData()
  const time = parseInt(times.reduce((total, segment) => (total += `${segment}`), ''))
  const distance = parseInt(distances.reduce((total, segment) => (total += `${segment}`), ''))

  let solutions = 0
  for (let t = 0; t <= time; t++) {
    if ((time - t) * t > distance) {
      solutions++
    }
  }
  return solutions
}
