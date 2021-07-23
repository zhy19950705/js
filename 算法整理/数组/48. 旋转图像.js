/**
 * https://leetcode-cn.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  let i = 0,
    j = n - 1;
  while (i < j) {
    [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
    i++;
    j--;
  }
  for (i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};
