/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  const length = points.length;
  if (length === 0) return 0;
  points.sort((a, b) => a[1] - b[1]);
  let right = points[0][1];
  let result = 1;
  for (let i = 1; i < length; i++) {
    if (points[i][0] > right) {
      right = points[i][1];
      result++;
    }
  }
  return result;
};
