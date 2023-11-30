import noSpaceLeftOnDevice from './solution'

describe('Solution for No Space Left On Device', () => {
  const answer = noSpaceLeftOnDevice()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(1648397)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(1815525)
  })
})
