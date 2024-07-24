import extendedPolymerization from './solution'

describe('Solution for Extended Polymerization', () => {
  const answer = extendedPolymerization()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(2375)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(1976896901756)
  })
})
