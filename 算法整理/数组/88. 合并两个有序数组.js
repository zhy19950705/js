/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * https://leetcode-cn.com/problems/merge-sorted-array/
 */
var merge = function (nums1, m, nums2, n) {
  let length = m + n - 1;
  let len1 = m - 1,
    len2 = n - 1;
  while (len1 >= 0 && len2 >= 0) {
    nums1[length--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  while (len2 >= 0) {
    nums1[len2] = nums2[len2--];
  }
};
