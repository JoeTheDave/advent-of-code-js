import iWasToldThereWouldBeNoMath from './solution'

describe('Solution for I Was Told There Would Be No Math', () => {
  const answer = iWasToldThereWouldBeNoMath()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(1586300)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(3737498)
  })
})
