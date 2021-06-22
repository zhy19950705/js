/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const length = nums.length;
  if (length === 1) return nums[0] === target ? 0 : -1;
  let left = 0,
    right = length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right + 1) / 2);
    if (nums[mid] === target) return mid;
    if (target >= nums[0]) {
      if (nums[mid] < nums[0]) {
        nums[mid] = +Infinity;
      }
    } else {
      if (nums[mid] >= nums[0]) {
        nums[mid] = -Infinity;
      }
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
