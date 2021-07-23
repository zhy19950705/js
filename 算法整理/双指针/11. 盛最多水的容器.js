/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode-cn.com/problems/container-with-most-water/
 */
var maxArea = function (height) {
  const n = height.length;
  let l = 0,
    r = n - 1,
    max = 0,
    lH,
    rH;
  while (l < r) {
    (lH = height[l]), (rH = height[r]);
    max = Math.max(max, (r - l) * Math.min(lH, rH));
    if (lH > rH) {
      r--;
    } else {
      l++;
    }
  }
  return max;
};
