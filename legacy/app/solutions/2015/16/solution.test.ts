import auntSue from './solution'

describe('Solution for Aunt Sue', () => {
  const answer = auntSue()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(373)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(260)
  })
})
