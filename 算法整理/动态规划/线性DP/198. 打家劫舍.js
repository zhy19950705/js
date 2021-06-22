/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let dp = [0, nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dp[i + 1] = Math.max(dp[i], nums[i] + dp[i - 1]);
  }
  return dp[nums.length];
};
