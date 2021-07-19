/**
 * @param {number[][]} grid
 * @return {number}
 * https://leetcode-cn.com/problems/rotting-oranges/
 */
var orangesRotting = function (grid) {
  const h = grid.length,
    w = grid[0].length;
  function inArea(r, c) {
    return r >= 0 && c >= 0 && r < h && c < w;
  }
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let count = 0;
  const queue = [];
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      if (grid[r][c] === 1) {
        count++;
      } else if (grid[r][c] === 2) {
        queue.push([r, c]);
      }
    }
  }
  let round = 0;
  while (count > 0 && queue.length) {
    round++;
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      const [r, c] = queue.shift();
      for (let dir of dirs) {
        const newR = r + dir[0];
        const newC = c + dir[1];
        if (inArea(newR, newC) && grid[newR][newC] === 1) {
          grid[newR][newC] = 2;
          count--;
          queue.push([newR, newC]);
        }
      }
    }
  }
  return count > 0 ? -1 : round;
};
