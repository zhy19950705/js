/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[1] - b[1]);

  const length = intervals.length;
  let right = intervals[0][1];
  let result = 1;
  for (let i = 1; i < length; ++i) {
    if (intervals[i][0] >= right) {
      ++result;
      right = intervals[i][1];
    }
  }
};

//【题目】给定一系列区间，请你选一个子集，使得这个子集里面区间都不相互重叠，
// 并且这个子集里面元素个数最多。不重叠的定义：区间 [3,4] 和 [4,5] 就是不重叠。
// 输入：A = [[1,2],[2, 3], [3,4], [1,3]
// 输出：3
// 解释：最多只能选出 3 个区间相互不重叠[1,2], [2,3], [3,4]
// var
