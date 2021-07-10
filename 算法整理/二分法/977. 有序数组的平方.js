/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0,
    right = nums.length - 1,
    left2,
    right2;
  const result = [];
  while (left <= right) {
    left2 = Math.pow(nums[left], 2);
    right2 = Math.pow(nums[right], 2);
    if (left2 >= right2) {
      result.unshift(left2);
      left++;
    } else {
      result.unshift(right2);
      right--;
    }
  }
  return result;
};
