/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * https://leetcode-cn.com/problems/valid-anagram/
 */
var isAnagram = function (s, t) {
  const map = new Map(),
    sn = s.length,
    tn = t.length;
  if (sn !== tn) return false;
  for (let i = 0; i < tn; i++) {
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) + 1);
    } else {
      map.set(t[i], 1);
    }
  }
  for (let i = 0; i < sn; i++) {
    if (!map.has(s[i])) return false;
    const count = map.get(s[i]);
    if (count === 1) {
      map.delete(s[i]);
    } else {
      map.set(s[i], count - 1);
    }
  }
  return true;
};
