/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const h = matrix.length,
    w = matrix[0].length;
  let r = h - 1,
    c = 0;
  while (r >= 0 && c < w) {
    if (matrix[r][c] === target) {
      return true;
    } else if (matrix[r][c] > target) {
      r--;
    } else {
      c++;
    }
  }
  return false;
};
