/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const length = nums.length;
  if (length === 0) return [];
  const result = [];
  const used = {};
  function dfs(path) {
    if (path.length === length) {
      return result.push(path.slice());
    }
    for (let value of nums) {
      if (used[value]) continue;
      path.push(value);
      used[value] = true;
      dfs(path);
      used[value] = false;
      path.pop();
    }
  }
  dfs([]);
  console.log(result);
  return result;
};
permute([1, 2, 3]);
