/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [],
    n = nums.length,
    visited = {};
  function dfs(path) {
    if (path.length === n) {
      return result.push(path.slice());
    }
    for (let value of nums) {
      if (visited[value]) continue;
      visited[value] = true;
      path.push(value);
      dfs(path);
      visited[value] = false;
      path.pop();
    }
  }
  dfs([]);
  return result;
};
