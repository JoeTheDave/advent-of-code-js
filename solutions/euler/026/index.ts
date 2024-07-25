// Project Euler | Problem 26 | Reciprocal Cycles
// https://projecteuler.net/problem=26

export const displayName = 'EULER | Problem 26 | Reciprocal Cycles'
export const complete = true

const findReciprocalCycle = (d: number) => {
  const decimals = []
  let remainder = 10
  const remainderMemory: { state: number[]; remainder: number }[] = [
    { state: [], remainder },
  ]
  let cycleStartMarker = null
  do {
    const division = Math.floor(remainder / d)
    decimals.push(division)
    remainder = (remainder - division * d) * 10
    cycleStartMarker = remainderMemory.find(r => r.remainder === remainder)
    if (!cycleStartMarker) {
      remainderMemory.push({ state: [...decimals], remainder })
    }
  } while (remainder > 0 && decimals.length <= 10000 && !cycleStartMarker)
  if (cycleStartMarker) {
    const precursor = cycleStartMarker.state.join('')
    const cycle = decimals.join('').substring(precursor.length)
    // console.log(`${d} - ${1 / d} - 0.${precursor}(${cycle})`)
    return cycle.length
  }
  return 0
}

export const solution = () => {
  let candidate = 0
  let longestCycle = 0
  for (let x = 2; x < 1000; x++) {
    const result = findReciprocalCycle(x)
    if (result > longestCycle) {
      candidate = x
      longestCycle = result
    }
  }
  return candidate
}
