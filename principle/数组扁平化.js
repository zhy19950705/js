function flattern(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result = result.concat(flattern(array[i]))
        } else {
            result.push(array[i])
        }
    }
    return result
}

function flattern(array) {
    return array.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? flattern(cur) : cur)
    }, [])
}