import noSuchThingAsTooMuch from './solution'

describe('Solution for No Such Thing as Too Much', () => {
  const answer = noSuchThingAsTooMuch()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(1304)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(18)
  })
})
