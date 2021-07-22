/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/find-peak-element/
 */
var findPeakElement = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] > nums[m + 1]) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};
