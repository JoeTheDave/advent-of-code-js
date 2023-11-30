import lanternfish from './solution'

describe('Solution for Lanternfish', () => {
  const answer = lanternfish()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(372984)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(1681503251694)
  })
})
