/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 */
var findAnagrams = function (s, p) {
  const result = [],
    sLen = s.length,
    pLen = p.length;
  if (pLen > sLen) return [];
  const sArr = Array(26).fill(0),
    pArr = sArr.slice(),
    av = "a".charCodeAt();
  for (let i = 0; i < pLen; i++) {
    pArr[p[i].charCodeAt() - av]++;
  }
  let l = 0,
    r = 0;
  for (; r < sLen; r++) {
    let curRight = s[r].charCodeAt() - av;
    sArr[curRight]++;
    while (sArr[curRight] > pArr[curRight]) {
      const curLeft = s[l].charCodeAt() - av;
      sArr[curLeft]--;
      l++;
    }
    if (r - l + 1 === pLen) {
      result.push(l);
    }
  }
  return result;
};
