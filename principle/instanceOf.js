function instanceOf(left, right) {
    if (typeof left !== 'object' || left === null) return false
    var __proto__ = Reflect.getPrototypeOf(left)

    while(true) {
        if (__proto__ === null) return false
        if (__proto__ === right.prototype) return true
        __proto__ = Reflect.getPrototypeOf(proto)
    }
}
console.log(instanceOf(new Number(1), Number))

function getType(obj) {
    if (obj === null) return null
    let type = typeof obj
    if (type !== 'object') return type
    return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1')
}
console.log(getType([]))

/** a == 1 && a == 2 & a == 3 */
var a = {
    value: 1,
    // valueOf() {
        // return this.value++
    // },
    toString() {
        console.log(this.value)
        return this.value++
    }
}
console.log(a == 1 && a == 2 && a == 3)