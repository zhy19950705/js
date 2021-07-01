/**
 * 它采用了分治策略，将数组分成2个较小的数组，然后每个数组再分成两个更小的数组，直至每个数组里只包含一个元素，
 * 然后将小数组不断的合并成较大的数组，直至只剩下一个数组，就是排序完成后的数组序列。
 *
 * 实现步骤：
 * 将原始序列平分成两个小数组
 * 判断小数组长度是否为1，不为1则继续分裂
 * 原始数组被分称了长度为1的多个小数组，然后合并相邻小数组（有序合并）
 * 不断合并小数组，直到合并称一个数组，则为排序后的数组序列
 *
 * 时间复杂度： O(nlog~2~n)
 * 空间复杂度： O(n)
 */
function mergeSort(arr) {
  const length = arr.length;
  if (length === 1) return arr;
  const mid = Math.floor(length / 2);
  let sortedLeft = mergeSort(arr.slice(0, mid));
  let sortedRight = mergeSort(arr.slice(mid));
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  left.length && result.push(...left);
  right.length && result.push(...right);
  return result;
}
const arr = [2, 9, 6, 7, 4, 3, 1, 7];
console.log(mergeSort(arr));
