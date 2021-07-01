/** 
 * 和归并排序一致，它也使用了分治策略的思想，它也将数组分成一个个小数组，但与归并不同的是，它实际上并没有将它们分隔开。
 * 
 * 快排使用了分治策略的思想，所谓分治，顾名思义，就是分而治之，将一个复杂的问题，分成两个或多个相似的子问题，
 * 在把子问题分成更小的子问题，直到更小的子问题可以简单求解，求解子问题，则原问题的解则为子问题解的合并。

快排的过程简单的说只有三步：

首先从序列中选取一个数作为基准数
将比这个数大的数全部放到它的右边，把小于或者等于它的数全部放到它的左边 （一次快排 partition）
然后分别对基准的左右两边重复以上的操作，直到数组完全排序
具体按以下步骤实现：

1，创建两个指针分别指向数组的最左端以及最右端
2，在数组中任意取出一个元素作为基准
3，左指针开始向右移动，遇到比基准大的停止
4，右指针开始向左移动，遇到比基准小的元素停止，交换左右指针所指向的元素
5，重复3，4，直到左指针超过右指针，此时，比基准小的值就都会放在基准的左边，比基准大的值会出现在基准的右边
6，然后分别对基准的左右两边重复以上的操作，直到数组完全排序
注意这里的基准该如何选择喃？最简单的一种做法是每次都是选择最左边的元素作为基准：
但这对几乎已经有序的序列来说，并不是最好的选择，它将会导致算法的最坏表现。还有一种做法，就是选择中间的数或通过 Math.random() 来随机选取一个数作为基准，下面的代码实现就是以随机数作为基准。
 */
function quickSort(arr) {
  sort(arr, 0, arr.length - 1);
}

function sort(arr, start, end) {
  // 如果区域内的数字少于 2 个，退出递归
  if (start >= end) return;
  // 将数组分区，并获得中间值的下标
  let mid = partition_v3(arr, start, end);
  // 对左边区域快速排序
  sort(arr, start, mid - 1);
  // 对右边区域快速排序
  sort(arr, mid + 1, end);
}

// 将 arr 从 start 到 end 分区，左边区域比基数小，右边区域比基数大，然后返回中间值的下标
function partition(arr, start, end) {
  // 取第一个数为基数
  let pivot = arr[start];
  // 从第二个数开始分区
  let left = start + 1;
  // 右边界
  let right = end;
  // left、right 相遇时退出循环
  while (left < right) {
    // 找到第一个大于基数的位置
    while (left < right && arr[left] <= pivot) left++;
    // 交换这两个数，使得左边分区都小于或等于基数，右边分区大于或等于基数
    if (left !== right) {
      swap(arr, left, right);
      right--;
    }
  }
  // 如果 left 和 right 相等，单独比较 arr[right] 和 pivot
  if (left === right && arr[right] > pivot) right--;
  // 将基数和中间数交换
  if (right !== start) swap(arr, start, right);
  // 返回中间值的下标
  return right;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let arr = [-1, 2, -8, -10];
quickSort(arr);
console.log(arr); // [1, 2, 3, 4, 5]

function patition(arr, start, end) {
  let pivot = arr[start];
  let left = start + 1;
  let right = end;
  while (left < right) {
    while (left < right && arr[left] < pivot) {
      left++;
    }
    while (left < right && arr[right] > pivot) {
      right--;
    }
    if (left < right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  if (left === right && arr[right] > pivot) right--;
  swap(arr, start, right);
  return right;
}
/**
 * 理想中的快速排序在第 k 轮遍历中，可以排好 2^k−1
 * 个基数。但从图中我们发现，当数组原本为正序或逆序时，我们将第一个数作为基数的话，每轮分区后，都有一个区域是空的，
 * 也就是说数组中剩下的数字都被分到了同一个区域！这就导致了每一轮遍历只能排好一个基数。
 * 所以总的比较次数为 (n - 1) + (n - 2) + (n - 3) + ... + 1 次，
 * 由等差数列求和公式可以计算出总的比较次数为 n(n - 1)/2 次，此时快速排序的时间复杂度达到了 O(n^2)级。
 */

/**
 * 快速排序的优化思路
 * 第一种就是我们在前文中提到的，每轮选择基数时，从剩余的数组中随机选择一个数字作为基数。
 * 这样每轮都选到最大或最小值的概率就会变得很低了。所以我们才说用这种方式选择基数，其平均时间复杂度是最优的
 *
 * 第二种解决方案是在排序之前，先用洗牌算法将数组的原有顺序打乱，以防止原数组正序或逆序。
 */

function partition_v3(nums, start, end) {
  let pivot_index = start + Math.floor(Math.random() * (end - start + 1));
  swap(nums, start, pivot_index);
  let pivot = nums[start];
  let left = start + 1,
    right = end;
  while (left < right) {
    while (left < right && nums[left] <= pivot) {
      left++;
    }
    while (left < right && nums[right] >= pivot) {
      right--;
    }
    if (left < right) {
      swap(nums, left++, right--);
    }
  }
  if (left === right && nums[right] > pivot) right--;
  swap(nums, right, start);
  return right;
}
