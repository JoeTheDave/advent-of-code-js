import dive from './solution'

describe('Solution for Dive!', () => {
  const answer = dive()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(1893605)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(2120734350)
  })
})
