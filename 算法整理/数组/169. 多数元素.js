/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/majority-element/
 */
var majorityElement = function (nums) {
  let count = 1,
    n = nums.length,
    cur = nums[0];
  for (let i = 1; i < n; i++) {
    if (count === 0) cur = nums[i];
    if (nums[i] === cur) {
      count++;
    } else {
      count--;
    }
  }
  return cur;
};
