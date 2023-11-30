import rucksackReorganization from './solution'

describe('Solution for Ruck Sack Reorganization', () => {
  const answer = rucksackReorganization()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(7908)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(2838)
  })
})
