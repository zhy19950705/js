const bubbleSort = (arr, flag = 0) => {
    const length = arr.length
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j] ,arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return flag ? arr : arr.reverse()
}
const arr = [2, 9, 6, 7, 4, 3, 1, 7]
console.log(bubbleSort(arr))