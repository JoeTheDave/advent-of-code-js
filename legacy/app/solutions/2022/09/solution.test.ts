import ropeBridge from './solution'

describe('Solution for Rope Bridge', () => {
  const answer = ropeBridge()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(6090)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(2566)
  })
})
