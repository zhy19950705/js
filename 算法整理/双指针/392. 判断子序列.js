/**
 * https://leetcode-cn.com/problems/is-subsequence/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let ps = 0,
    pt = 0;
  while (ps < s.length && pt < t.length) {
    if (s[ps] === t[pt]) {
      ps++;
    }
    pt++;
  }
  return ps === s.length;
};
