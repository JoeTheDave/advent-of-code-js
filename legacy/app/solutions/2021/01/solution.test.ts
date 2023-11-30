import sonarSweep from './solution'

describe('Solution for Sonar Sweep', () => {
  const answer = sonarSweep()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(1711)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(1743)
  })
})
