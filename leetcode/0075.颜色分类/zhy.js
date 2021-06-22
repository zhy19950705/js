/**
 * 单指针
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const length = nums.length;
  let ptr = 0;
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[ptr]] = [nums[ptr], nums[i]];
      ptr++;
    }
  }
  for (let i = ptr; i < length; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[ptr]] = [nums[ptr], nums[i]];
      ptr++;
    }
  }
};

/**
 * 双指针
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const length = nums.length;
  let p0 = 0,
    p1 = 0;
  for (let i = 0; i < length; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[p1]] = [nums[p1], nums[i]];
      p1++;
    } else if (nums[i] === 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]];
      if (p0 < p1) {
        [nums[i], nums[p1]] = [nums[p1], nums[i]];
      }
      p0++;
      p1++;
    }
  }
};
