// Project Euler | Problem 15 | Lattice Paths
// https://projecteuler.net/problem=15

export const displayName = 'EULER | Problem 15 | Lattice Paths'
export const complete = true

const responseCache: { [key: string]: number } = {}

const getPathCountForDimensionalLattice = ([x, y]: number[]): number => {
  let result = responseCache[`${x}|${y}`]
  if (!result) {
    if (x === 1) {
      result = y + 1
    } else {
      const path1 = [x - 1, y].sort()
      const path2 = [x, y - 1].sort()
      result =
        getPathCountForDimensionalLattice(path1) +
        getPathCountForDimensionalLattice(path2)
    }
    responseCache[`${x}|${y}`] = result
  }
  return result
}

export const solution = () => {
  let result = 0
  for (let x = 1; x <= 20; x++) {
    for (let y = 1; y <= 20; y++) {
      result = getPathCountForDimensionalLattice([x, y].sort())
    }
  }
  return result
}
