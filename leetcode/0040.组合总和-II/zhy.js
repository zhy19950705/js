/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const used = {};
  function dfs(path, begin, target) {
    if (target === 0) {
      return result.push(path.slice());
    }
    for (let i = begin; i < candidates.length; i++) {
      // 大剪枝：减去 candidates[i] 小于 0，减去后面的 candidates[i + 1]、candidates[i + 2] 肯定也小于 0，因此用 break
      if (target < candidates[i]) break;
      // 小剪枝：同一层相同数值的结点，从第 2 个开始，候选数更少，结果一定发生重复，因此跳过，用 continue
      if (i > begin && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      used[i] = true;
      dfs(path, i + 1, target - candidates[i]);
      used[i] = false;
      path.pop();
    }
  }
  dfs([], 0, target);
  console.log(result);
  return result;
};

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
