/**
 * @param {string} s
 * @return {number}
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 */
var firstUniqChar = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], -1);
    } else {
      map.set(s[i], i);
    }
  }
  for (let value of map.values()) {
    if (value !== -1) {
      return value;
    }
  }
  return -1;
};
