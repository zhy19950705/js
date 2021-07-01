/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const length = s.length;
  if (length === 0) return "";
  let start = 0;
  let max = 0;
  let hashMap = new Map();
  for (let end = 0; end < length; end++) {
    if (hashMap.has(s[end])) {
      start = Math.max(start, hashMap.get(s[end]));
    }
    max = Math.max(max, end - start + 1);
    hashMap.set(s[end], end + 1);
  }
  return max;
};
