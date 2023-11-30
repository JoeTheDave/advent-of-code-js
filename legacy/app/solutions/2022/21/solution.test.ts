import monkeyMath from './solution'

describe('Solution for Monkey Math', () => {
  const answer = monkeyMath()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(276156919469632)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(3441198826073)
  })
})
