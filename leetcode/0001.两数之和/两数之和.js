/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let [index, value] of nums.entries()) {
    let another = target - value;
    if (map.has(another)) {
      return [index, map.get(another)];
    }
    map.set(value, index);
  }
};

let nums = [2, 7, 11, 15],
  target = 9;
twoSum(nums, target);
