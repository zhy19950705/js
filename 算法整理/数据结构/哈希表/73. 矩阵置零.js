/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * https://leetcode-cn.com/problems/set-matrix-zeroes/submissions/
 */
var setZeroes = function (matrix) {
  const rowSet = new Set();
  const colSet = new Set();
  const h = matrix.length,
    w = matrix[0].length;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (matrix[i][j] === 0) {
        rowSet.add(i);
        colSet.add(j);
      }
    }
  }
  rowSet.forEach((row) => {
    for (let i in matrix[row]) {
      matrix[row][i] = 0;
    }
  });
  colSet.forEach((col) => {
    for (let row = 0; row < h; row++) {
      matrix[row][col] = 0;
    }
  });
};
