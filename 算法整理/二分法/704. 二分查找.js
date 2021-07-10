/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * https://leetcode-cn.com/problems/binary-search/
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
