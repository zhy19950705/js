/**
 * @param {number[][]} grid
 * @return {number}
 * https://leetcode-cn.com/problems/max-area-of-island/
 */
var maxAreaOfIsland = function (grid) {
  const h = grid.length,
    w = grid[0].length;
  let max = 0;
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      if (grid[r][c] === 1) {
        max = Math.max(max, dfs(r, c));
      }
    }
  }

  function dfs(r, c) {
    if (!inArea(r, c)) return 0;
    if (grid[r][c] !== 1) return 0;
    grid[r][c] = 2;
    return dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1) + 1;
  }
  function inArea(r, c) {
    return r >= 0 && c >= 0 && r < h && c < w;
  }
  return max;
};
