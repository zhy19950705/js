/**
 * https://leetcode-cn.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const h = grid.length,
    w = grid[0].length;
  let sum = 0;
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      if (grid[r][c] !== "1") continue;
      dfs(r, c);
      sum++;
    }
  }
  function dfs(r, c) {
    if (!inArea(r, c)) return;
    if (grid[r][c] !== "1") return;
    grid[r][c] = "2";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }
  function inArea(r, c) {
    return r >= 0 && r >= 0 && r < h && c < w;
  }
  return sum;
};
