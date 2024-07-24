import probablyAFireHazard from './solution'

describe('Solution for Probably a Fire Hazard', () => {
  const answer = probablyAFireHazard()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(400410)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(15343601)
  })
})
