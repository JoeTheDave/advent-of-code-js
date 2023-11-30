import hydrothermalVenture from './solution'

describe('Solution for Hydrothermal Venture', () => {
  const answer = hydrothermalVenture()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(7438)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(21406)
  })
})
