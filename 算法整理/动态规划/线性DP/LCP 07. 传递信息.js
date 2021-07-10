/**
 * dfs
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  const arr = Array(n)
    .fill(0)
    .map(() => Array());
  for (let [row, value] of relation) {
    arr[row].push(value);
  }
  let ways = 0;
  function dfs(index, steps) {
    if (steps === k) {
      if (index === n - 1) {
        ways++;
      }
      return;
    }
    for (let next of arr[index]) {
      dfs(next, steps + 1);
    }
  }
  dfs(0, 0);
  return ways;
};
