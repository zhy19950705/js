/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const length = s.length;
  if (length <= 1) return length;
  const dp = Array(length)
    .fill(0)
    .map(() => Array(length).fill(0));
  for (let left = length - 1; left >= 0; left--) {
    dp[left][left] = 1;
    for (let right = left + 1; right < length; right++) {
      if (s.charAt(left) === s.charAt(right)) {
        dp[left][right] = dp[left + 1][right - 1] + 2;
      } else {
        dp[left][right] = Math.max(dp[left + 1][right], dp[left][right - 1]);
      }
    }
  }
  return dp[0][length - 1];
};
