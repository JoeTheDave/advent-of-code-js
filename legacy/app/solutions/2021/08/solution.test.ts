import sevenSegmentSearch from './solution'

describe('Solution for Seven Segment Search', () => {
  const answer = sevenSegmentSearch()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(245)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(983026)
  })
})
