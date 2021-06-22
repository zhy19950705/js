/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const length = nums.length;
  // 根据数组的长度判断是否可以被划分。如果长度小于2，不可能被分割成元素和相等的两个子集
  if (length < 2) return false;
  const sum = nums.reduce((prev, cur) => prev + cur);
  // 如果和为奇数，不可能被分割成元素和相等的两个子集
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  // 如果有一个值大于target, 则其他元素和一定小于target, 返回false
  for (let i = 0; i < length; i++) {
    if (nums[i] > target) return false;
  }
  //   // dp[i][j] 表示 0 - i选取若干数，使和为j, 初始时都为false
  //   const dp = Array(length)
  //     .fill(0)
  //     .map(() => Array(target + 1).fill(false));
  //   dp[0][nums[0]] = true;
  //   for (let i = 0; i < length; i++) {
  //       // 如果不选取任何整数，对于任何 0 < i < length, dp[i][0]为true
  //     dp[i][0] = true;
  //   }
  //   // 0 - 0， 只有nums[0]可以选取， 则dp[0][nums[0]] = true
  //   dp[0][nums[0]] = true;
  //   for (let i = 1; i < length; i++) {
  //     const num = nums[i];
  //     for (let j = 1; j <= target; j++) {
  //         // j > num时， 当前数可以选，也可以不选
  //       if (j >= num) {
  //         dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num];
  //       } else {
  //         dp[i][j] = dp[i - 1][j];
  //       }
  //     }
  //   }
  //   return dp[length - 1][target];

  const dp = Array(target + 1).fill(false);
  dp[0] = true;
  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }
  return dp[target];
};
canPartition([1, 5, 11, 5]);
