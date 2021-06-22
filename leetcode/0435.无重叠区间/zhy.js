/**
 * 动态规划
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - a[1]);
  const length = intervals.length;
  let dp = Array(length).fill(1);
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (intervals[j][1] <= intervals[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return length - Math.max(...dp);
};

/**
 * 贪心
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  const length = intervals.length;
  if (length === 0) return 0;
  intervals.sort((a, b) => a[1] - b[1]);
  const right = intervals[0][1];
  let ans = 1;
  for (let i = 1; i < length; i++) {
    if (intervals[i][0] >= right) {
      right = intervals[i][1];
      ans++;
    }
  }
  return n - ans;
};
eraseOverlapIntervals([
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
]);
