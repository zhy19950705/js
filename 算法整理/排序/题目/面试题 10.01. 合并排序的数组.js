/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 * https://leetcode-cn.com/leetbook/read/sort-algorithms/osomav/
 */
var merge = function (A, m, B, n) {
  while (m >= 1 && n >= 1) {
    A[m + n - 1] = A[m - 1] <= B[n - 1] ? B[--n] : A[--m];
  }
  while (--n >= 0) {
    A[n] = B[n];
  }
};

let A = [1, 2, 3, 0, 0, 0],
  m = 3,
  B = [2, 5, 6],
  n = 3;
merge(A, m, B, n);
console.log(A);
