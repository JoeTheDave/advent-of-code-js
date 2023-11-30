import notQuiteLisp from './solution'

describe('Solution for Not Quite Lisp', () => {
  const answer = notQuiteLisp()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(138)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(1771)
  })
})
