/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode-cn.com/problems/3sum/
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  if (n < 3) return [];
  if (nums[n - 1] < 0) return [];
  const result = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1,
      r = n - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum > 0) {
        r--;
      } else {
        l++;
      }
    }
  }
  return result;
};
