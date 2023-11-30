import allInASingleNight from './solution'

describe('Solution for All in a Single Night', () => {
  const answer = allInASingleNight()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(207)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(804)
  })
})
