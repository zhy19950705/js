/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const hashMap = new Map();
  let num;
  for (num of nums) {
    if (hashMap.has(num)) {
      return num;
    }
    hashMap.set(num, true);
  }
};
