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

// n = 2
function matrix(n) {
  const result = [];
  while (result.length < n) {
    result.push([]);
  }

  let currentValue = 1;

  let startRow = 0; // 1
  let endRow = n - 1; // 1
  let startColumn = 0; // 1
  let endColumn = n - 1; // 1
  while (startRow <= endRow && startColumn <= endColumn) {
    console.log(startRow, endRow, startColumn, endColumn);
    for (let c = startColumn; c <= endColumn; c++) {
      result[startRow][c] = currentValue;
      currentValue++;
    }

    // 1
    startRow++;

    for (let r = startRow; r <= endRow; r++) {
      result[r][endColumn] = currentValue;
      currentValue++;
    }

    // 0
    endColumn--;

    for (let c = endColumn; c >= startColumn; c--) {
      result[endRow][c] = currentValue;
      currentValue++;
    }

    // 0
    endRow--;

    // startRow = 1, endRow = 0
    for (let r = endRow; r >= startRow; r--) {
      result[r][startColumn] = currentValue;
      currentValue++;
    }

    // 0
    startColumn++;
  }

  return result;
}

module.exports = matrix;
