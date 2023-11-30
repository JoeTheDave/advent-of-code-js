import medicineForRudolph from './solution'

describe('Solution for Medicine for Rudolph', () => {
  const answer = medicineForRudolph()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(0)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(0)
  })
})
