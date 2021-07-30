/**
 * https://leetcode-cn.com/problems/combination-sum/submissions/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  function dfs(path, rest) {
    if (rest === 0) {
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i] > rest || rest < candidates[0]) break;
      if (i > 0 && candidates[i] > path[path.length - 1]) break;
      let newRest = rest - candidates[i];
      path.push(candidates[i]);
      dfs(path, newRest);
      path.pop();
    }
  }
  dfs([], target);
  return result;
};
