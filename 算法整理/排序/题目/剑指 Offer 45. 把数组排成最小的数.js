/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  const length = nums.length;
  for (let i = 0; i < length - 1; i++) {
    let flag = false;
    for (let j = 0; j < length - i - 1; j++) {
      if ("" + nums[j] + nums[j + 1] > "" + nums[j + 1] + nums[j]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  return nums.join("");
};
