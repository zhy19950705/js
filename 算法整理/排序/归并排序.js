const merge = (left, right) => {
    let result = []
    while(left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    if (left.length) {
        result = [...result, ...left]
    }
    if (right.length) {
        result = [...result, ...right]
    }
    return result
}
const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    let mergeLeftArray = mergeSort(left)
    let mergeRightArray = mergeSort(right)
    return merge(mergeLeftArray, mergeRightArray)
}

const arr = [2, 9, 6, 7, 4, 3, 1, 7]
console.log(mergeSort(arr))