/**
 * https://leetcode-cn.com/leetbook/read/sort-algorithms/ev4tee/
 * 交换法：在新数字插入过程中，不断与前面的数字交换，直到找到自己合适的位置。
 * 插入排序过程需要两层循环，时间复杂度为 O(n^2)
 * 只需要常量级的临时变量，空间复杂度为 O(1)
 * 插入排序的过程不会破坏原有数组中相同关键字的相对次序，所以插入排序是一种稳定的排序算法。
 */
function quickSort(arr) {
  const length = arr.length;
  let i;
  // 从第二个数开始，往前插入数字
  for (i = 1; i < length; i++) {
    // j 记录当前数字下标
    let j = i;
    // 当前数字比前一个数字小，则将当前数字与前一个数字交换
    while (j >= 1 && arr[j - 1] > arr[j]) {
      swap(arr, j, j - 1);
      // 更新当前数字下标
      j--;
    }
  }
}

/** 移动法：在新数字插入过程中，与前面的数字不断比较，前面的数字不断向后挪出位置，当新数字找到自己的位置后，插入一次即可。 */
function quickSort_v2() {
  // 从第二个数开始，往前插入数字
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    // 寻找插入位置的过程中，不断地将比 currentNumber 大的数字向后挪
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j--;
    }
    // 两种情况会跳出循环：1. 遇到一个小于或等于 currentNumber 的数字，跳出循环，currentNumber 就坐到它后面。
    // 2. 已经走到数列头部，仍然没有遇到小于或等于 currentNumber 的数字，也会跳出循环，此时 j 等于 -1，currentNumber 就坐到数列头部。
    arr[j + 1] = cur;
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [1, 3, 5, 7, 2, 4, 6];
quickSort(arr);
console.log(arr);
