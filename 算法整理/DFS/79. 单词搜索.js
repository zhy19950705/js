/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let h = board.length,
    w = board[0].length,
    i,
    j;
  let visited = Array(h)
    .fill(0)
    .map(() => Array(w).fill(0));
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (i = 0; i < h; i++) {
    for (j = 0; j < w; j++) {
      if (dfs(x, y, 0)) {
        return true;
      }
    }
  }
  return false;

  function dfs(row, col, begin) {
    if (begin === word.length - 1) return board[row][col] === word[begin];
    if (board[row][col] === word[begin]) {
      visited[row][col] = true;
      for (let dir of dirs) {
        let newRow = row + dir[0];
        let newCol = col + dir[1];
        if (inArea(newRow) && !visited[newRow][newCol]) {
          if (dfs(newRow, newCol, begin + 1)) {
            return true;
          }
        }
      }
      visited[row][col] = false;
    }
  }

  function inArea(row, col) {
    return row >= 0 && row >= 0 && col < w && row < h;
  }
};
