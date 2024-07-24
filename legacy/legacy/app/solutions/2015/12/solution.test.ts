import jsAbacusFrameworkIo from './solution'

describe('Solution for JSAbacusFramework.io', () => {
  const answer = jsAbacusFrameworkIo()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(111754)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(65402)
  })
})
