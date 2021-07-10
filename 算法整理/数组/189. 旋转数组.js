/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 额外空间
 */
var rotate = function (nums, k) {
  let n = nums.length;
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; i++) {
    nums[i] = temp[i];
  }
};

/**
 * 翻转数组
 * [1, 2, 3, 4, 5, 6, 7] 3 => [5, 6, 7, 1, 2, 3, 4]
 * [7, 6, 5, 4, 3, 2, 1]
 * [5, 6, 7, 4, 3, 2, 1]
 * [5, 6, 7, 1, 2, 3, 4]
 */
var rotate_v2 = function (nums, k) {
  let n = nums.length;
  k = k % n;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
};
function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
