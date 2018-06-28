// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const mainMatrix = []

  for (let i = 0; i < n; i++) {
    mainMatrix.push([])
  }

  let columnStart = 0
  let columnEnd = n - 1
  let rowStart = 0
  let rowEnd = n - 1
  let index = 1;

  while (columnStart <= columnEnd && rowStart <= rowEnd) {
    for (let i = columnStart; i <= columnEnd; i++) {
      mainMatrix[rowStart][i] = index
      index++
    }
    rowStart++

    for (let i = rowStart; i <= rowEnd; i++) {
      mainMatrix[i][columnEnd] = index
      index++
    }
    columnEnd--

    for (let i = columnEnd; i >= columnStart; i--) {
      mainMatrix[rowEnd][i] = index
      index++
    }
    rowEnd--

    for (let i = rowEnd; i >= rowStart; i--) {
      mainMatrix[i][columnStart] = index
      index++
    }
    columnStart++
  }

  return mainMatrix
}

module.exports = matrix;
