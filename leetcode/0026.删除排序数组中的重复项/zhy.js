/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const length = nums.length;
  if (length <= 1) return length;
  let i = 0;
  for (let j = i + 1; j < length; j++) {
    if (nums[j] !== nums[j + 1]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};
