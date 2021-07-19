function throttle(fn, wait, options = {}) {
  var timerId, context, args;
  var previous = 0;
  var later = function () {
    previous = options.leading === false ? 0 : Date.now();
    timerId = null;
    func.apply(context, args);
    if (!timerId) context = args = null;
  };
  var throttled = function () {
    var now = Date.now();
    if (previous === 0 && options.leading === false) {
      previous = now;
    }
    var remaining = waiting - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      previous = now;
      fn.apply(context, args);
      if (!timerId) context = args = null;
    } else if (!timerId && options.trailing !== false) {
      timerId = setTimeout(later, remaining);
    }
  };
  throttled.cancel = function () {
    clearTimeout(timerId);
    previous = 0;
    timerId = null;
  };
  return throttle;
}

function test(str, delay) {
  console.log(Date.now(), str, delay);
  // console.log(this)
  return str;
}

/**
 * timestamp
 * 间隔内只执行一次，立即执行
 *  */
function throttle_v1(fn, delay) {
  let previous = 0;
  function throttle() {
    let context = this;
    let args = Array.from(arguments);
    let now = Date.now();
    if (now - previous < delay) return;
    fn.apply(context, args);
    previous = now;
  }
  return throttle;
}
const fn_v1 = throttle_v1(test, 1000);
console.log("v1", Date.now());
fn_v1("v1", 0);
setTimeout(() => fn_v1("v1", 500), 500);
setTimeout(() => fn_v1("v1", 1000), 1000);
setTimeout(() => fn_v1("v1", 1500), 1500);
setTimeout(() => fn_v1("v1", 2000), 2000);
setTimeout(() => fn_v1("v1", 3000), 3000);

/**
 * timeout
 * 延迟执行，间隔内只执行一次
 *  */
function throttle_v2(fn, delay) {
  let timerId;
  function throttle() {
    let context = this;
    let args = Array.from(arguments);
    // console.log(timerId);
    if (!timerId) {
      timerId = setTimeout(() => {
        fn.apply(context, args);
        timerId = null;
      }, delay);
    }
  }
  return throttle;
}
// const fn_v2 = throttle_v2(test, 1000);
// console.log("v2", Date.now());
// fn_v2("v2", 0);
// setTimeout(() => fn_v2("v2", 500), 500);
// setTimeout(() => fn_v2("v2", 1000), 1000);
// setTimeout(() => fn_v2("v2", 1500), 1500);
// setTimeout(() => fn_v2("v2", 2000), 2000);
// setTimeout(() => fn_v2("v2", 3000), 3000);

function throttle_v3(fn, delay) {
  let timerId,
    previous = 0,
    context,
    args;
  let later = function () {
    previous = Date.now();
    timerId = null;
    fn.apply(context, args);
  };
  function throttle() {
    let now = Date.now();
    let remaining = delay - (now - previous);
    context = this;
    args = Array.from(arguments);
    if (remaining <= 0 || remaining > delay) {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      previous = now;
      fn.apply(context, args);
    } else if (!timerId) {
      timerId = setTimeout(() => later, remaining);
    }
  }
  return throttle;
}
// const fn_v3 = throttle_v3(test, 1000);
// console.log("v3", Date.now());
// fn_v3("v3", 0);
// setTimeout(() => fn_v3("v3", 500), 500);
// setTimeout(() => fn_v3("v3", 1000), 1000);
// setTimeout(() => fn_v3("v3", 1500), 1500);
// setTimeout(() => fn_v3("v3", 2000), 2000);
// setTimeout(() => fn_v3("v3", 3000), 3000);

function throttle_v3(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function () {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function () {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };
  return throttled;
}
