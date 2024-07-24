import cathodeRayTube from './solution'

describe('Solution for Cathode Ray Tube', () => {
  const answer = cathodeRayTube()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(13220)
  })
  it('Part 2 should have the correct result', () => {
    expect(JSON.stringify(answer[1])).toBe(
      '["###..#..#..##..#..#.#..#.###..####.#..#.","#..#.#..#.#..#.#.#..#..#.#..#.#....#.#..","#..#.#..#.#..#.##...####.###..###..##...","###..#..#.####.#.#..#..#.#..#.#....#.#..","#.#..#..#.#..#.#.#..#..#.#..#.#....#.#..","#..#..##..#..#.#..#.#..#.###..####.#..#."]',
    )
  })
})
