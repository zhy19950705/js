/**
 * https://leetcode-cn.com/problems/n-th-tribonacci-number/
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let a = 0,
    b = 1,
    c = 1,
    i,
    sum;
  for (i = 0; i < n; i++) {
    sum = a + b + c;
    a = b;
    b = c;
    c = sum;
  }
  return a;
};
