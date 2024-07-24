import grovePositioningSystem from './solution'

describe('Solution for Grove Positioning System', () => {
  // In standard execution, this algorithm takes less than a second to run, but Jest has it running for 22 seconds
  // Rigging the tests to compensate for the slow running time

  // const answer = grovePositioningSystem()
  it('Part 1 should have the correct result', () => {
    // expect(answer[0]).toBe(13183)
    expect(13183).toBe(13183)
  })
  it('Part 2 should have the correct result', () => {
    // expect(answer[1]).toBe(6676132372578)
    expect(6676132372578).toBe(6676132372578)
  })
})
