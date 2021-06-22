/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = Array(numRows)
    .fill(0)
    .map((_, index) => Array(index + 1));
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (j === 0 || j === result[i].length - 1) {
        result[i][j] = 1;
      } else {
        result[i][j] = result[i - 1][j] + result[i - 1][j - 1];
      }
    }
  }
  return result;
};
