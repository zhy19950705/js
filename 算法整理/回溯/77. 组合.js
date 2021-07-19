/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (n === 0) return [];
  const result = [];
  function dfs(path, begin) {
    if (path.length === k) {
      return result.push(path.slice());
    }
    for (let i = begin; i <= n; i++) {
      if (i <= path[path.length - 1]) continue;
      path.push(i);
      dfs(path, begin + 1);
      path.pop();
    }
  }
  dfs([], 1);
  console.log(result);
  return result;
};
