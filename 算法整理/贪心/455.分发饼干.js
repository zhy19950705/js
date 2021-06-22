/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let gLength = g.length,
    sLength = s.length,
    result = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  for (let i = 0, j = 0; i < gLength && j < sLength; i++, j++) {
    while (j < sLength && g[i] > s[j]) {
      j++;
    }
    if (j < sLength) {
      result++;
    }
  }
  console.log(result);
  return result;
};
const g = [10, 9, 8, 7],
  s = [10, 9, 8, 7];
findContentChildren(g, s);
