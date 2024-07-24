import perfectlySphericalHousesInAVacuum from './solution'

describe('Solution for Perfectly Spherical Houses in a Vacuum', () => {
  const answer = perfectlySphericalHousesInAVacuum()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(2572)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(2631)
  })
})
