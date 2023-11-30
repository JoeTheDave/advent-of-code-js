import knightsOfTheDinnerTable from './solution'

describe('Solution for Knights of the Dinner Table', () => {
  const answer = knightsOfTheDinnerTable()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(709)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(668)
  })
})
