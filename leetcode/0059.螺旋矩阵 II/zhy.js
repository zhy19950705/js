/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let left = 0,
    top = 0,
    right = n - 1,
    bottom = n - 1;
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
  }
  let num = 1;
  while (num <= n * n) {
    for (let i = left; i <= right; i++) matrix[top][i] = num++;
    top++;
    for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
    right--;
    for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
    bottom--;
    for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
    left++;
  }
  return matrix;
};
