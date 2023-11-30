import reindeerOlympics from './solution'

describe('Solution for Reindeer Olympics', () => {
  const answer = reindeerOlympics()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(2660)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(1256)
  })
})
