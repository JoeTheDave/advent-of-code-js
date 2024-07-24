import likeAGifForYourYard from './solution'

describe('Solution for Like a GIF For Your Yard', () => {
  const answer = likeAGifForYourYard()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(768)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(781)
  })
})
