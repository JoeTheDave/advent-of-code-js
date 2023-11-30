import distressSignal from './solution'

describe('Solution for Distress Signal', () => {
  const answer = distressSignal()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(5938)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(29025)
  })
})
