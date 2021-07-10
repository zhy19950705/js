/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/jump-game-ii/
 */
var jump = function (nums) {
  let steps = 0,
    rightMost = 0,
    end = 0,
    n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    rightMost = Math.max(rightMost, i + nums[i]);
    if (end === i) {
      steps++;
      end = rightMost;
    }
  }
  return steps;
};
