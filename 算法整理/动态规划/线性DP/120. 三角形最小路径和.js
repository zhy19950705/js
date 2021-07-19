/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const h = triangle.length;
  const dp = Array(h)
    .fill(0)
    .map((_, index) => Array(index + 1));
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < h; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }
  console.log(dp);
  return Math.max(...dp[h - 1]);
};
minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
