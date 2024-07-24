import doesntHeHaveInternElvesForThis from './solution'

describe("Solution for Doesn't He Have Intern-Elves For This?", () => {
  const answer = doesntHeHaveInternElvesForThis()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(258)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(53)
  })
})
