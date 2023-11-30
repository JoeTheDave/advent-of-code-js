import tuningTrouble from './solution'

describe('Solution for Tuning Trouble', () => {
  const answer = tuningTrouble()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(1287)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(3716)
  })
})
