function uniq(array) {
    let obj = {}
    return array.filter(function (item, index, array) {
        return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
    })
}
var array = [1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN, NaN];
console.log(uniq(array))

function uniq(array) {
    let map = new Map()
    return array.filter((item) => {
        return map.has(item) ? false : map.set(item, true)
    })
}