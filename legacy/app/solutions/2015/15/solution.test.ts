import scienceForHungryPeople from './solution'

describe('Solution for Science for Hungry People', () => {
  const answer = scienceForHungryPeople()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(18965440)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(15862900)
  })
})
