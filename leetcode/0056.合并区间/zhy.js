/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 先按照区间起始位置排序
  intervals.sort(([a], [b]) => a - b);
  const result = [];
  let index = -1;
  for (let value of intervals) {
    // 如果结果数组是空的，或者当前区间的起始位置 > 结果数组中最后区间的终止位置，
    // 则不合并，直接将当前区间加入结果数组。
    if (result.length === 0 || value[0] > result[index][1]) {
      result[++index] = value;
    } else {
      // 反之将当前区间合并至结果数组的最后区间
      result[index][1] = Math.max(value[1], result[index][1]);
    }
  }
  return result;
};
var test = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
merge(test);
