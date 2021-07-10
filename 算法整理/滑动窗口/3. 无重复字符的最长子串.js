/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const hashMap = new Map();
  let max = 0;
  let start = 0,
    end;
  for (end = 0; end < s.length; end++) {
    if (hashMap.has(s[end])) {
      start = Math.max(start, hashMap.get(s[end]) + 1);
    }
    max = Math.max(max, end - start + 1);
    hashMap.set(s[end], end);
  }
  return max;
};
