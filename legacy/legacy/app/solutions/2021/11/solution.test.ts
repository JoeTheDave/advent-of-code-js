import dumboOctopus from './solution'

describe('Solution for Dumbo Octopus', () => {
  const answer = dumboOctopus()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(1620)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(371)
  })
})
