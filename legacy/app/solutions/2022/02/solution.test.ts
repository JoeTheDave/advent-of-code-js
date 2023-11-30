import rockPaperScissors from './solution'

describe('Solution for Rock Paper Scissors', () => {
  const answer = rockPaperScissors()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(8392)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(10116)
  })
})
