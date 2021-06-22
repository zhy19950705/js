const quickSort = (arr) => {
    const length = arr.length
    for (let i = 1; i < length; i++) {
        let prevIndex = i - 1
        let cur = arr[i]
        while(prevIndex >= 0 && arr[prevIndex] > cur) {
            arr[prevIndex + 1] = arr[prevIndex]
            prevIndex--
        }
        arr[prevIndex + 1] = cur
    }
    return arr
}
console.log(quickSort([3, 2, 4, 1]))