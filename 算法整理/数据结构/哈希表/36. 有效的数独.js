/**
 * @param {character[][]} board
 * @return {boolean}
 * https://leetcode-cn.com/problems/valid-sudoku/
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let obj = {};
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") continue;
      if (obj[board[i][j]]) {
        return false;
      } else {
        obj[board[i][j]] = 1;
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    let obj = {};
    for (let j = 0; j < 9; j++) {
      if (board[j][i] === ".") continue;
      if (obj[board[j][i]]) {
        return false;
      } else {
        obj[board[j][i]] = 1;
      }
    }
  }
  for (let w = 0; w < 9; w++) {
    let obj = {};
    for (let i = (w % 3) * 3; i < (w % 3) * 3 + 3; i++) {
      for (let j = parseInt(w / 3) * 3; j < parseInt(w / 3) * 3 + 3; j++) {
        if (board[i][j] === ".") continue;
        if (obj[board[i][j]]) {
          return false;
        } else {
          obj[board[i][j]] = 1;
        }
      }
    }
  }
  return true;
};
