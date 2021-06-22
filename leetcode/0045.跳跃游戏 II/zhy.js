/**
 * 反向查找最远出发位置
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let steps = 0;
  let position = nums.length - 1;
  while (position > 0) {
    for (let i = 0; i < position; i++) {
      if (i + nums[i] >= position) {
        position = i;
        steps++;
        break;
      }
    }
  }
  return steps;
};

/**
 * 正向查找可到达的最大位置
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let step = 0;
  let maxPosition = 0;
  let end = 0;
  const length = nums.length;
  for (let i = 0; i < length - 1; i++) {
    maxPosition = Math.max(maxPosition, nums[i] + i);
    if (end === i) {
      step++;
      end = maxPosition;
    }
  }
  return steps;
};
