import regolithReservoir from './solution'

describe('Solution for Regolith Reservoir', () => {
  const answer = regolithReservoir()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(638)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(31722)
  })
})
