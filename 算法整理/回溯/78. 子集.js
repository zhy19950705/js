/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  function dfs(path, begin) {
    result.push(path.slice());
    for (let i = begin; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(path, i + 1);
      path.pop();
    }
  }
  dfs([], 0);
  return result;
};
