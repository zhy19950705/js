/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = new Map();
  let rest;
  for (let [index, value] of nums.entries()) {
    rest = target - value;
    if (hashMap.has(rest)) {
      return [hashMap.get(rest), index];
    } else {
      hashMap.set(value, index);
    }
  }
};
twoSum([2, 7, 11, 15], 9);
