/**
 * 中心扩散
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let res = "";
  const helper = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    const str = s.slice(left + 1, right);
    if (str.length > res.length) {
      res = str;
    }
  };
  for (let i = 0; i < s.length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }
  return res;
};

/**
 * 动态规划
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const length = s.length;
  if (length < 2) return s;
  let maxStart = 0;
  let maxEnd = 0;
  let maxLen = 1;
  let dp = Array(length)
    .fill(0)
    .map(() => Array(length).fill(0));
  for (let r = 1; r < length; r++) {
    for (let l = 0; l < r; l++) {
      // r - 1 <= 2表示子串长度小于2
      if (s.charAt(l) === s.charAt(r) && (r - l <= 2 || dp[l + 1][r - 1])) {
        dp[l][r] = true;
        if (r - l + 1 > maxLen) {
          maxLen = r - l + 1;
          maxStart = l;
          maxEnd = r;
        }
      }
    }
  }
  return s.substring(maxStart, maxEnd + 1);
};
