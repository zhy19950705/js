/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  const max = Math.max(...weights);
  const sum = weights.reduce((prev, cur) => prev + cur);
  let left = max,
    right = sum;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let need = 1;
    let cur = 0;
    for (const num of weights) {
      cur += num;
      if (cur > mid) {
        need++;
        cur = num;
      }
    }
    // [left, ...mid, ...right]
    if (need < days) {
      // mid够大，可以缩小
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
