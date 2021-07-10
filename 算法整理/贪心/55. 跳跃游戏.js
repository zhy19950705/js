/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // const n = nums.length
  // let dp = Array(n).fill(false)
  // dp[0] = true
  // for (let i = 1; i < n; i++) {
  //     for (let j = 0; j < i; j++) {
  //         if (dp[j] && j + nums[j] >= i) {
  //             dp[i] = true
  //             break
  //         }
  //     }
  // }
  // return dp[n - 1]
  let rightMost = 0;
  for (let [index, value] of nums.entries()) {
    if (rightMost >= index) {
      rightMost = Math.max(index + value, rightMost);
    }
    if (rightMost >= nums.length - 1) {
      return true;
    }
  }
  return false;
};
