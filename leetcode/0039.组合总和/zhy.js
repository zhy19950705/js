/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const length = candidates.length;
  const result = [];
  candidates.sort((a, b) => a - b);
  function dfs(path, rest) {
    if (rest < 0) return;
    if (rest === 0) return result.push(path.slice());
    for (let i = 0; i < length; i++) {
      rest = rest - candidates[i];
      if (rest < 0) break;
      if (candidates[i] > path[path.length - 1]) break;
      path.push(candidates[i]);
      dfs(path, rest);
      const top = path.pop();
      rest = rest + top;
    }
  }
  dfs([], target);
  return result;
};
combinationSum([2, 7, 6, 3, 5, 1], 9);
