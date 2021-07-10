/**
 * https://leetcode-cn.com/problems/counting-bits/
 * 题解: https://leetcode-cn.com/problems/counting-bits/solution/hen-qing-xi-de-si-lu-by-duadua/
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let result = [0];
  for (let i = 1; i < n; i++) {
    if (n % 2 === 0) {
      result = result[Math.floor(i / 2)];
    } else {
      result[i] = result[i - 1] + 1;
    }
  }
  return result;
};
