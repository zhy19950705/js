/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let index = 0;
  let length = intervals.length;
  // 当前遍历的是a左边的，不重叠的区间
  while (index < length && intervals[index][1] < newInterval[0]) {
    result.push(intervals[index]);
    index++;
  }
  // 当前遍历是有重叠的区间
  while (index < length && intervals[index][0] <= newInterval[1]) {
    //左端取较小者，更新给a区间的左端
    newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
    //右端取较大者，更新给a区间的右端
    newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
    index++;
  }
  // 循环结束后，a区间为合并后的区间，推入res
  result.push(newInterval);
  // 在a右边，没重叠的区间
  while (index < length) {
    result.push(intervals[index]);
    index++;
  }
  return result;
};
