/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
    判断在左边还是右边，左边则设置右边为Infinite, 右边则设置左边为+Infinite, 正常2分
 */
var search = function (nums, target) {
  const n = nums.length;
  let left = 0,
    right = n - 1,
    mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (target >= nums[0]) {
      if (nums[mid] < nums[0]) {
        nums[mid] = Infinity;
      }
    } else {
      if (nums[mid] >= nums[0]) {
        nums[mid] = -Infinity;
      }
    }
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
