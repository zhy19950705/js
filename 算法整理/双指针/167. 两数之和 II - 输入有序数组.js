/**
 * @param {string} s
 * @return {string}
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/submissions/
 */
var reverseWords = function (s) {
  let p1 = 0,
    p2 = 0,
    n = s.length;
  s = s.split("");
  while (p2 < n) {
    while (s[p2] !== " " && p2 < n) {
      p2++;
    }
    let start = p1,
      end = p2 - 1;
    while (start < end) {
      const temp = s[start];
      s[start] = s[end];
      s[end] = temp;
      start++;
      end--;
    }
    p1 = p2 + 1;
    p2 = p1;
  }
  return s.join("");
};
reverseWords("Let's take LeetCode contest");
