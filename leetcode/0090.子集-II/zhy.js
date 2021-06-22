/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  function backTrack(path, start) {
    result.push(path.slice());
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      path.push(nums[i]);
      backTrack(path, i + 1);
      path.pop();
    }
  }
  backTrack([], 0);
  return result;
};
subsetsWithDup([1, 2, 2]);
