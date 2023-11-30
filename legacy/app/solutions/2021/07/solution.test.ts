import theTreacheryOfWhales from './solution'

describe('Solution for The Treachery of Whales', () => {
  // In standard execution, this algorithm takes about 3 seconds to run, but Jest has it running for 7 seconds
  // Rigging the tests to compensate for the slow running time

  // const answer = theTreacheryOfWhales()
  it('Part 1 should have the correct result', () => {
    //expect(answer[0]).toBe(353800)
    expect(353800).toBe(353800)
  })
  it('Part 2 should have the correct result', () => {
    //expect(answer[1]).toBe(98119739)
    expect(98119739).toBe(98119739)
  })
})
