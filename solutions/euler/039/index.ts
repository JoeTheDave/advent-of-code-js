// Project Euler | Problem 39 | Integer Right Triangles
// https://projecteuler.net/problem=39

export const displayName = 'EULER | Problem 39 | Integer Right Triangles'
export const complete = true

export const solution = () => {
  let bestPerimeterTriangleCount = 0
  let bestPerimeter = 0
  for (let p = 3; p <= 1000; p++) {
    let rightTriangles = 0
    for (let a = 1; a <= p - 2; a++) {
      for (let b = 1; b <= p - 2; b++) {
        const c = p - a - b
        if (a ** 2 + b ** 2 === c ** 2) {
          rightTriangles++
        }
      }
    }
    if (rightTriangles > bestPerimeterTriangleCount) {
      bestPerimeterTriangleCount = rightTriangles
      bestPerimeter = p
    }
  }
  return bestPerimeter
}
