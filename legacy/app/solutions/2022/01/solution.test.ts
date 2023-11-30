import calorieCounting from './solution'

describe('Solution for Calorie Counting', () => {
  const answer = calorieCounting()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(68775)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(202585)
  })
})
