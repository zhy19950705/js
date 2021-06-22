/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  let left = 0,
    right = Math.floor(x / 2); // 3, 4符合要求
  // 在区间 [left..right] 查找目标元素
  while (left < right) {
    // 如果 mid 下取整，在区间只有 2 个数的时候有 mid = left，一旦进入分支 [mid..right] 区间不会再缩小，发生死循环。
    const mid = Math.floor((left + right + 1) / 2);
    // 注意：这里为了避免乘法溢出，改用除法
    if (mid > x / mid) {
      // 下一轮搜索区间是 [left..mid - 1]
      right = mid - 1;
    } else {
      // 下一轮搜索区间是 [mid..right]
      left = mid;
    }
  }
  return left;
};
