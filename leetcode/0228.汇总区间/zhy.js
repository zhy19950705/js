/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const length = nums.length;
  let result = [];
  let i = 0;
  while (i < length) {
    let low = i;
    i++;
    while (i < length && nums[i] - nums[i - 1] === 1) {
      i++;
    }
    const high = i - 1;
    if (high - low >= 1) {
      result.push(`${nums[low]}->${nums[high]}`);
    } else {
      result.push(nums[low] + "");
    }
  }
  return result;
};
const nums = [0, 1, 2, 4, 5, 7];
summaryRanges(nums);
