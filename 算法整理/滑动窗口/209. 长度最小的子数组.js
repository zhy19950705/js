/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 */
var minSubArrayLen = function (target, nums) {
  const length = nums.length;
  if (length === 0) return 0;
  let result = Number.MAX_SAFE_INTEGER;
  let start = 0,
    end = 0;
  let sum = 0;
  while (end < length) {
    sum += nums[end];
    while (sum >= target) {
      result = Math.min(result, end - start + 1);
      sum -= nums[start];
      start++;
    }
    end++;
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};
