/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let p1 = 0,
    p2 = 0,
    n1 = nums1.length,
    n2 = nums2.length,
    result = [];
  while (p1 < n1 && p2 < n2) {
    if (nums1[p1] === nums2[p2]) {
      result.push(nums1[p1]);
      p1++;
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }
  return result;
};
