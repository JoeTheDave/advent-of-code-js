import someAssemblyRequired from './solution'

describe('Solution for Some Assembly Required', () => {
  const answer = someAssemblyRequired()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(3176)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(14710)
  })
})
