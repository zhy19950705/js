/**
 * 动态规划，自底向上优化
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let prev = 0,
    maxAns = nums[0];
  for (let value of nums) {
    prev = Math.max(prev + value, value);
    maxAns = Math.max(maxAns, prev);
  }
  return maxAns;
};

/**
 * 动态规划，自底向上优化版
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let n = nums.length;
  let dp = [nums[0]];
  let max = dp[0];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 1]);
    max = Math.max(dp[i], max);
  }
  return max;
};
