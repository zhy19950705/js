/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const length = nums.length;
  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < length; i++) {
    let left = i + 1,
      right = length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }
      if (sum === target) {
        return result;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};
