import supplyStacks from './solution'

describe('Solution for Supply Stacks', () => {
  const answer = supplyStacks()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe('FJSRQCFTN')
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe('CJVLJQPHS')
  })
})
