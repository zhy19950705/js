/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/leetbook/read/sort-algorithms/etdd3m/
 * 归并排序
 */
var reversePairs = function (nums) {
  const length = nums.length;
  const result = Array(length).fill(0);
  return mergeSortAndCount(nums, 0, length - 1, result);
};

function mergeSortAndCount(nums, start, end, result) {
  if (start === end) return 0;
  let mid = Math.floor((start + end) / 2);
  let leftCount = mergeSortAndCount(nums, start, mid, result);
  let rightCount = mergeSortAndCount(nums, mid, end, result);
  let crossCount = mergeAndCount(nums, start, end, result);
  return leftCount + rightCount + crossCount;
}

function mergeAndCount(nums, start, end, result) {
  let count = 0;
  let end1 = Math.floor((start + end) / 2);
  let start2 = end1 + 1;
  let p1 = start;
  let p2 = start2;
  while (p1 <= end1 && p2 <= end) {
    if (nums[p1] <= nums[p2]) {
      result[p1 + p2 - start2] = nums[p1++];
    } else {
      result[p1 + p2 - start] = nums[p2++];
      count += end1 - p1 + 1;
    }
  }
  while (p1 <= end1) {
    result[p1 + p2 - start2] = nums[p1++];
  }
  while (p2 <= end2) {
    result[p1 + p2 - start2] = nums[p2++];
  }
  while (start <= end) {
    nums[start] = result[start++];
  }
  return count;
}
