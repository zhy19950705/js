/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * https://leetcode-cn.com/problems/ransom-note/submissions/
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map(),
    n = magazine.length,
    r = ransomNote.length;
  for (let i = 0; i < n; i++) {
    if (map.has(magazine[i])) {
      map.set(magazine[i], map.get(magazine[i]) + 1);
    } else {
      map.set(magazine[i], 1);
    }
  }
  for (let i = 0; i < r; i++) {
    if (!map.has(ransomNote[i])) return false;
    const count = map.get(ransomNote[i]);
    if (count === 1) {
      map.delete(ransomNote[i]);
    } else {
      map.set(ransomNote[i], count - 1);
    }
  }
  return true;
};
