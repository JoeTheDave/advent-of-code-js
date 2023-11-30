import giantSquid from './solution'

describe('Solution for Giant Squid', () => {
  const answer = giantSquid()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(49686)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(26878)
  })
})
