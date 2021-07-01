/**
 * 原理：从左到右，相邻元素进行比较，如果前一个元素值大于后一个元素值（正序），则交换，
 * 这样一轮下来，将最大的数在最右边冒泡出来。这样一轮一轮下来，最后实现从小到大排序。
 * 时间复杂度：最好时间复杂度 O(n)，平均时间复杂度 O(n^2)
 * 空间复杂度：O(1)
 */
const bubbleSort = (arr, flag = true) => {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    // 提前退出冒泡循环的标识位
    let flag = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    // 没有数据交换
    if (!flag) break;
  }
  return flag ? arr : arr.reverse();
};
const arr = [2, 9, 6, 7, 4, 3, 1, 7];
console.log(bubbleSort(arr));
