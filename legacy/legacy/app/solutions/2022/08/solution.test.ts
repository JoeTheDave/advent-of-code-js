import treetopTreeHouse from './solution'

describe('Solution for Treetop TreeHouse', () => {
  const answer = treetopTreeHouse()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(1676)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(313200)
  })
})
