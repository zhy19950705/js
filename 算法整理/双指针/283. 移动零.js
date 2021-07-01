/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const length = nums.length;
  if (length === 0) return;
  let left = 0;
  for (let right = 0; right < length; left++) {
    if (nums[left]) {
      if (right > left) {
        nums[left] = nums[right];
        nums[right] = 0;
      }
      left++;
    }
  }
};
