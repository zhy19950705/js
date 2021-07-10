/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/delete-and-earn/
 */
var deleteAndEarn = function (nums) {
  let max = Math.max(...nums);
  let sum = Array(max + 1).fill(0);
  for (let value of nums) {
    sum[value] += value;
  }
  return rob(sum);
};

function rob(nums) {
  let cur = nums[0],
    next = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    let temp = next;
    next = Math.max(cur + nums[i], next);
    cur = temp;
  }
  return next;
}
