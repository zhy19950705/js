/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 * https://leetcode-cn.com/problems/interval-list-intersections/
 */
var intervalIntersection = function (firstList, secondList) {
  const fn = firstList.length,
    sn = secondList.length,
    result = [];
  let p0 = 0,
    p1 = 0;
  while (p0 < fn && p1 < sn) {
    const lo = Math.max(firstList[p0][0], secondList[p1][0]);
    const ri = Math.min(firstList[p0][1], secondList[p1][1]);
    if (lo <= ri) {
      result.push([lo, ri]);
    }
    if (firstList[p0][1] < secondList[p1][1]) {
      p0++;
    } else {
      p1++;
    }
  }
  return result;
};
