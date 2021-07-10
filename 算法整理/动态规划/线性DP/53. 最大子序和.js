/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = [nums[0]],
    max = nums[0],
    n = nums.length;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
};

var maxSubArray_v2 = function (nums) {
  let max = -Infinity,
    sum = 0;
  for (let value of nums) {
    if (sum <= 0) {
      sum = value;
    } else {
      sum += value;
    }
    max = Math.max(max, sum);
  }
  return max;
};
