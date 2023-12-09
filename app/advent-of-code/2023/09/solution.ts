import data, { testData } from './data'

// Mirage Maintenance

// https://adventofcode.com/2023/day/9
// https://adventofcode.com/2023/day/9/input

export const solutionOne = () => {
  const result = testData
    .map(dataLine => dataLine.split(' ').map(s => parseInt(s)))
    .map(baseSequence => {
      const iterations = [baseSequence]
      do {
        const sequence = iterations.slice(-1)[0]
        const next = []
        for (let i = 0; i < sequence.length - 1; i++) {
          next.push(sequence[i + 1] - sequence[i])
        }
        iterations.push(next)
      } while (iterations.slice(-1)[0].reduce((sum, num) => sum + num, 0) !== 0)
      iterations.slice(-1)[0].push(0)
      for (let s = iterations.length - 2; s >= 0; s--) {
        iterations[s].push(iterations[s].slice(-1)[0] + iterations[s + 1].slice(-1)[0])
      }
      // console.log(iterations)
      return iterations[0].slice(-1)[0]
    })

  testData.forEach((line, i) => {
    console.log(line, result[i])
  })

  //console.log(result)
  return result.reduce((sum, num) => sum + num, 0)
}

export const solutionTwo = () => {
  return null
}
