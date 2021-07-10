/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode-cn.com/problems/permutations-ii/
 */
var permuteUnique = function (nums) {
  const result = [],
    n = nums.length,
    visited = {};
  nums.sort((a, b) => a - b);
  function dfs(path) {
    if (path.length === n) {
      return result.push(path.slice());
    }
    for (let [index, value] of nums.entries()) {
      if (visited[index]) continue;
      if (
        index > 0 &&
        nums[index] === nums[index - 1] &&
        visited[index - 1] === false
      )
        continue;
      visited[index] = true;
      path.push(value);
      dfs(path);
      visited[index] = false;
      path.pop();
    }
  }
  dfs([]);
  return result;
};
