/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const length = nums.length;
  if (length === 0) return [-1, -1];
  if (nums[0] > target || nums[length - 1] < target) return [-1, -1];
  const left = findLeft(nums, target);
  if (left === -1) return [-1, -1];
  return [left, findRight(nums, target)];
};
function findLeft(nums, target) {
  let left = 0,
    right = nums.length - 1,
    leftPosition = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
      leftPosition = mid;
    }
  }
  return leftPosition;
}
function findRight(nums, target) {
  let left = 0,
    right = nums.length - 1,
    rightPosition = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      left = mid + 1;
      rightPosition = mid;
    }
  }
  return rightPosition;
}
console.log(searchRange([1, 3], 1));
