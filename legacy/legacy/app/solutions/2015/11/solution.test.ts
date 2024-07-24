import corporatePolicy from './solution'

describe('Solution for Corporate Policy', () => {
  const answer = corporatePolicy()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe('hepxxyzz')
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe('heqaabcc')
  })
})
