import binaryDiagnostic from './solution'

describe('Solution for Binary Diagnostic', () => {
  const answer = binaryDiagnostic()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(4139586)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(1800151)
  })
})
