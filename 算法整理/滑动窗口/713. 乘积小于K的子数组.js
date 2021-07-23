/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * https://leetcode-cn.com/problems/subarray-product-less-than-k/
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;
  const n = nums.length;
  let l = 0,
    r = 0,
    product = 1,
    result = 0;
  for (; r < n; r++) {
    product *= nums[r];
    while (product >= k) {
      product /= nums[l++];
    }
    result += r - l + 1;
  }
  return result;
};
