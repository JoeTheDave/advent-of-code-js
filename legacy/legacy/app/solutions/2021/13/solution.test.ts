import transparentOrigami from './solution'

describe('Solution for Transparent Origami', () => {
  const answer = transparentOrigami()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(753)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(
      [
        '#..#.####.#....####.#..#...##.###..#..#',
        '#..#....#.#....#....#..#....#.#..#.#.#.',
        '####...#..#....###..####....#.#..#.##..',
        '#..#..#...#....#....#..#....#.###..#.#.',
        '#..#.#....#....#....#..#.#..#.#.#..#.#.',
        '#..#.####.####.####.#..#..##..#..#.#..#',
      ].join(''),
    )
  })
})
