function riverSizes(matrix) {
  // Write your code here.

  const rivers = []

  const countRiverSize = (row, col) => {
    // out of bounds checks
    if (row < 0 || col < 0) return 0
    if (row >= matrix.length) return 0
    if (col >= matrix[row].length) return 0

    // land check
    if (matrix[row][col] === 0) return 0

    // at this point, we're in bounds AND a river
    // so let's set outselves to tracked (by changing into land)
    matrix[row][col] = 0

    // and visit neighbors recursively
    // the 1 is for ourselves, and the math is all our neighbors
    return 1 +
      countRiverSize(row - 1, col) +
      countRiverSize(row, col - 1) +
      countRiverSize(row + 1, col) +
      countRiverSize(row, col + 1)


  }
  // we're gonna iterate for each pixel
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const cell = matrix[row][col]
      // don't care if it's land
      if (cell === 0) continue

      // then it's 1, then let's make count how big it is
      const riverSize = countRiverSize(row, col)
      rivers.push(riverSize)
    }
  }
  return rivers
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
