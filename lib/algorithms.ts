export const maximumPyramidPathSum = (pyramid: number[][]) => {
  return pyramid.reverse().reduce((prevRow, currentRow) => {
    if (!prevRow.length) {
      return currentRow
    }
    return currentRow.map(
      (val, idx) => val + Math.max(prevRow[idx], prevRow[idx + 1]),
    )
  }, [])[0]
}
