/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let p1 = 0,
    p2 = 0,
    n = nums.length;
  while (p2 < n) {
    if (nums[p2]) {
      swap(nums, p1, p2);
      p1++;
    }
    p2++;
  }
};

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
