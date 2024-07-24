import data from './data'

// Cube Conundrum

// https://adventofcode.com/2023/day/2
// https://adventofcode.com/2023/day/2/input

const maxColors = {
  red: 12,
  green: 13,
  blue: 14,
}

export const solutionOne = () => {
  return data.reduce((sum, line) => {
    const [label, hands] = line.split(': ')
    const gameId = parseInt(label.replace('Game ', ''))
    return (
      (hands.split('; ').reduce(
        (handIsValid, hand) =>
          handIsValid &&
          hand.split(', ').reduce((countIsValid, count) => {
            const [num, color] = count.split(' ')
            return countIsValid && num <= maxColors[color]
          }, true),
        true,
      )
        ? gameId
        : 0) + sum
    )
  }, 0)
}

const colorIdx = {
  red: 0,
  green: 1,
  blue: 2,
}

export const solutionTwo = () => {
  return data.reduce((sum, line) => {
    const hands = line.split(': ')[1]
    return (
      hands
        .split('; ')
        .reduce(
          (handCounts, hand) => {
            hand.split(', ').forEach(count => {
              const [num, color] = count.split(' ')
              handCounts[colorIdx[color]] = Math.max(handCounts[colorIdx[color]], parseInt(num))
            })
            return handCounts
          },
          [0, 0, 0],
        )
        .reduce((product, num) => product * num, 1) + sum
    )
  }, 0)
}
