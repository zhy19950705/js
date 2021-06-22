/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  return process(nums, 2);
};
function process(nums, k) {
  let u = 0;
  for (let value of nums) {
    if (u < k || nums[u - k] !== value) nums[u++] = x;
  }
}
removeDuplicates([1, 1, 1, 2, 2, 3]);
