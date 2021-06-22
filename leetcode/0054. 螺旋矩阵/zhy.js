/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return 0;
  let left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;
  const res = [];
  while (true) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    if (++top > bottom) break;
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    if (--right < left) break;
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    if (--bottom < top) break;
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    if (++left > right) break;
  }
  return res;
};
