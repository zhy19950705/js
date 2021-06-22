function shallowCopy(obj) {
    if (typeof obj !== 'object') return
    var newObj = Array.isArray(obj) ? [] : {}
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

function extend() {
    var length = arguments.length
    var target = arguments[0]
    var options, key
    for (var i = 1; i < length; i++) {
        options = arguments[i]
        if (options !== null) {
            for (key in options) {
                if (options.hasOwnProperty(key) && options[key] !== null && options[key] !== undefined) {
                    target[key] = options[key]
                }
            }
        }
    }
    return target
}
var obj1 = { 1: 2 }
var obj2 = { 3: 4 }
console.log(extend(obj1, obj2))