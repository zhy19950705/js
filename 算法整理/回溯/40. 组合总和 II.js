/**
 * https://leetcode-cn.com/problems/combination-sum-ii/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  function dfs(path, begin, rest) {
    if (rest === 0) {
      result.push(path.slice());
      return;
    }
    for (let i = begin; i < candidates.length; i++) {
      if (rest < candidates[i]) break;
      if (i > begin && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      dfs(path, i + 1, rest - candidates[i]);
      path.pop();
    }
  }
  dfs([], 0, target);
  return result;
};
