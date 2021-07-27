/**
 * https://leetcode-cn.com/problems/number-of-provinces/
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const provinces = isConnected.length;
  const visited = new Set();
  let circles = 0;
  for (let i = 0; i < provinces; i++) {
    if (!visited.has(i)) {
      dfs(i);
      circles++;
    }
  }
  function dfs(i) {
    for (let j = 0; j < provinces; j++) {
      if (isConnected[i][j] == 1 && !visited.has(j)) {
        visited.add(j);
        dfs(j);
      }
    }
  }
  return circles;
};
