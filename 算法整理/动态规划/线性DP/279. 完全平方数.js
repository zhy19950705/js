/**
 * https://leetcode-cn.com/problems/perfect-squares/
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let min = Infinity;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, dp[i - j * j]);
    }
    dp[i] = min + 1;
  }
  return dp[n];
};
