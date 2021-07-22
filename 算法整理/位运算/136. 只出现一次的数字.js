/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/single-number/
 */
var singleNumber = function (nums) {
  let result = 0;
  for (let v of nums) {
    result ^= v;
  }
  return result;
};
