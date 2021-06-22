/**
 * 递归
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  const length = s1.length;
  let dp = Array(length + 1)
    .fill(0)
    .map(() =>
      Array(length + 1)
        .fill(0)
        .map(() => Array(length + 1).fill(0))
    );
  for (let s1Start = 0; s1Start < length; i++) {
    for (let s2Start = 0; s2Start < length; i++) {
      dp[s1Start][s2Start][1] = s1.charAt(s1Start) == s2.charAt(s2Start);
    }
  }

  for (let len = 2; len < length; len++) {
    for (let s1Start = 0; s1Start + len < length; s1Start++) {
      for (let s2Start = 0; s2Start + len < length; s2Start++) {
        for (let leftLen = 1; leftLen <= length - 1; left++) {
          if (
            dp[s1Start][s2Start][leftLen] &&
            dp[s1Start + leftLen][s2Start + leftLen][length - leftLen]
          ) {
            dp[s1Start][s2Start][length] = true;
            break;
          }
          if (
            dp[s1Start][s2Start + length - leftLen][leftLen] &&
            dp[s1Start + leftLen][s2Start][length - leftLen]
          ) {
            dp[s1Start][s2Start][length] = true;
            break;
          }
        }
      }
    }
  }
  return dp[0][0][length];
};
