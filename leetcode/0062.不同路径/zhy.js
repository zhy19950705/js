/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  // 第一列都赋予1
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  // 第一行都赋予1
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }
  //两个for循环推导，对于(i,j)来说，只能由上方或者左方转移过来
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  return dp[m - 1][n - 1];
};
uniquePaths(3, 4);

/**
 * 空间优化，
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let cur = Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      //等式右边的 dp[j]是上一次计算后的，加上左边的dp[j-1]即为当前结果
      cur[j] = cur[j] + cur[j - 1];
    }
  }
  return cur[n - 1];
};
