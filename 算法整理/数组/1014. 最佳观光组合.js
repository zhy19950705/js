/**
 * @param {number[]} values
 * @return {number}
 * https://leetcode-cn.com/problems/best-sightseeing-pair/submissions/
 */
var maxScoreSightseeingPair = function (values) {
  let max = values[0] + 0,
    n = values.length,
    res = 0;
  for (let i = 1; i < n; i++) {
    res = Math.max(res, max + values[i] - i);
    max = Math.max(max, values[i] + i);
  }
  return res;
};
