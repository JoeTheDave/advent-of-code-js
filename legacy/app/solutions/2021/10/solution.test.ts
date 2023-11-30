import syntaxScoring from './solution'

describe('Solution for Syntax Scoring', () => {
  const answer = syntaxScoring()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(442131)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(3646451424)
  })
})
