/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = -Infinity,
    iMax = 1,
    iMin = 1; // 阶段最大值 阶段最小值
  for (let i = 0; i < nums.length; i++) {
    // 当遇到负数的时候进行交换，因为阶段最小*负数就变阶段最大了，反之同理
    if (nums[i] < 0) {
      [iMax, iMin] = [iMin, iMax];
    }
    iMax = Math.max(nums[i], iMax * nums[i]);
    iMin = Math.min(nums[i], iMin * nums[i]);
    max = Math.max(max, iMax);
  }
  return max;
};
