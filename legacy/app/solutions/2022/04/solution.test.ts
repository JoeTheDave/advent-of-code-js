import campCleanup from './solution'

describe('Solution for Camp Cleanup', () => {
  const answer = campCleanup()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(471)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(888)
  })
})
