/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let h = board.length,
    w = board[0].length;
  let visited = Array(h)
    .fill(0)
    .map(() => Array(w).fill(false));
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (dfs(x, y, 0)) {
        return true;
      }
    }
  }
  return false;
  function dfs(x, y, begin) {
    if (begin === word.length - 1) return board[y][x] === word[begin];
    if (board[y][x] === word[begin]) {
      visited[y][x] = true;
      for (let dir of dirs) {
        let newX = x + dir[0];
        let newY = y + dir[1];
        if (inArea(newX, newY) && !visited[newY][newX]) {
          if (dfs(newX, newY, begin + 1)) {
            return true;
          }
        }
      }
      visited[y][x] = false;
    }
  }
  function inArea(x, y) {
    return x >= 0 && y >= 0 && x < w && y < h;
  }
};
