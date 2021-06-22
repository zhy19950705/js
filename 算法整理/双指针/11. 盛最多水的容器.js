/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length < 2) return 0;
  const length = height.length;
  let start = 0,
    end = length - 1,
    max = 0,
    startHeight = 0,
    endHeight = 0;
  while (start < end) {
    startHeight = height[start];
    endHeight = height[end];
    const size = Math.min(startHeight, endHeight) * (end - start);
    max = Math.max(size, max);
    startHeight > endHeight ? end-- : start++;
  }
  return max;
};

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(arr);

// https://leetcode-cn.com/problems/container-with-most-water/
