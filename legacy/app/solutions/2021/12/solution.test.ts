import passagePathing from './solution'

describe('Solution for Passage Pathing', () => {
  const answer = passagePathing()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(3421)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(84870)
  })
})
