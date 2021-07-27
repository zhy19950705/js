/**
 * @param {string} s
 * @return {number}
 * https://leetcode-cn.com/problems/palindromic-substrings/
 */
var countSubstrings = function (s) {
  let sum = 0,
    n = s.length;
  for (let i = 0; i < n; i++) {
    sum++;
    is(i, i);
    if (s[i] === s[i + 1]) {
      sum++;
      is(i, i + 1);
    }
  }
  function is(a, b) {
    while (a > 0 && b < n - 1) {
      if (s[--a] === s[++b]) {
        sum++;
      } else {
        break;
      }
    }
  }
  return sum;
};
