/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const length = nums.length;
  let rightMost = 0;
  for (let i = 0; i < length; i++) {
    if (i <= rightMost) {
      rightMost = Math.max(rightMost, i + nums[i]);
      if (rightMost >= length - 1) {
        return true;
      }
    }
  }
  return false;
};
