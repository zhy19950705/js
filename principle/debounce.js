function debounce(fun, wait, immediate) {
    var timerId, result
    var debounce = function () {
        var context = this
        var args = arguments
        if (timerId) clearTimeout(timerId)
        if (immediate) {
            var callNow = !timerId
            if (callNow) result = fun.apply(context, args)
            timerId = setTimeout(function() {
                timerId = null
            }, wait);
        } else {
            timerId = setTimeout(function() {
                fun.apply(context, args)
            }, wait);
        }
        return result
    }
    debounce.cancel = function() {
        clearTimeout(timerId)
        timerId = null
    }
    return debounce
}