/**
 * https://leetcode-cn.com/problems/pascals-triangle-ii/
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let result = Array(rowIndex + 1).fill(0),
    i,
    j;
  result[0] = 1;
  for (i = 0; i < rowIndex + 1; i++) {
    for (j = i; j > 0; j--) {
      result[j] = result[j] + result[j - 1];
    }
  }
  return result;
};

function getRow_v1(rowIndex) {
  let result = Array(rowIndex + 1).fill(0),
    i,
    j;
  for (i = 0; i <= rowIndex; i++) {
    result[i] = Array(i + 1).fill(0);
    result[i][0] = result[i][i] = 1;
    for (j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }
  return result[rowIndex];
}
const result = getRow_v1(3);
console.log(result);
