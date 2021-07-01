/**
 * 从未排序的序列中找到最大（或最小的）放在已排序序列的末尾（为空则放在起始位置），
 * 重复该操作，知道所有数据都已放入已排序序列中。
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
function selectionSort(arr) {
  let indexMin = 0;
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [arr[indexMin], arr[i]] = [arr[i], arr[indexMin]];
    }
  }
  return arr;
}
let arr = [1, 3, 2, 5, 4];
selectionSort(arr);
console.log(arr); // [1, 2, 3, 4, 5]
