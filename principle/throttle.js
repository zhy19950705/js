function throttle (fn, wait, options = {}) {
    var timerId, context, args
    var previous = 0
    var later = function () {
        previous = options.leading === false ? 0 : Date.now();
        timerId = null;
        func.apply(context, args);
        if (!timerId) context = args = null;
    }
    var throttled = function () {
        var now = Date.now()
        if (previous === 0 && options.leading === false) {
            previous = now
        }
        var remaining = waiting - (now - previous)
        context = this
        args = arguments
        if (remaining <= 0 || remaining > wait) {
            if (timerId) {
                clearTimeout(timerId)
                timerId = null
            }
            previous = now
            fn.apply(context, args)
            if (!timerId) context = args = null;
        } else if (!timerId && options.trailing !== false) {
            timerId = setTimeout(later, remaining);
        }
    }
    throttled.cancel = function() {
        clearTimeout(timerId);
        previous = 0;
        timerId = null;
    }
    return throttle    
}