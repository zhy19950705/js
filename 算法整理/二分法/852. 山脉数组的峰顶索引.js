/**
 * @param {number[]} arr
 * @return {number}
 */
// var peakIndexInMountainArray = function(arr) {
//     let max = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[max]) {
//             max = i
//         }
//         if (arr[i] < arr[max]) {
//             return max
//         }
//     }
// };

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  const length = arr.length;
  let left = 1,
    right = length - 1;
  while (left < right) {
    let mid = Math.floor((left + right + 1) / 2);
    if (arr[mid - 1] < arr[mid]) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

peakIndexInMountainArray([0, 1, 0]);
