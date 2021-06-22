/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  const length = nums.length;
  if (length === 0) return false;
  let left = 0,
    right = length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (nums[left] === nums[mid]) {
      left++;
      continue;
    }
    if (nums[left] < nums[mid]) {
      if (nums[mid] > target && nums[left] <= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};
