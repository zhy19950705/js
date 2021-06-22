const quickSort = (arr) => {
    if (arr.length <= 1) return arr
    const index = Math.floor(arr.length / 2)
    let mid = arr.splice(index, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > mid) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat([mid], quickSort(right))
}
const arr = [2, 9, 6, 7, 4, 3, 1, 7]
console.log(quickSort(arr))