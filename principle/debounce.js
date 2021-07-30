function test(str) {
  console.log(Date.now(), str);
  //   console.log(this)
  return str;
}
this.global = "globa 1";
function debounce_v1(fn, delay) {
  let timerId;
  let debounce = function () {
    clearTimeout(timerId);
    timerId = setTimeout(fn, delay);
  };
  return debounce;
}
// const fn_v1 = debounce_v1(test, 2000);
// fn_v1("v1");
// setTimeout(() => {
//   fn_v1("v1");
// }, 1000);

/**
 * this
 */
function debounce_v2(fn, delay) {
  let timerId;
  let debounce = function () {
    let context = this;
    context.local = "local 1";
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(context);
    }, delay);
  };
  return debounce;
}
// const fn_v2 = debounce_v2(test, 2000);
// fn_v2("v2");
// setTimeout(() => {
//   fn_v2("v1");
// }, 1000);

/** 参数 */
function debounce_v3(fn, delay) {
  let timerId;
  let debounce = function () {
    let context = this;
    let args = Array.from(arguments);
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
  return debounce;
}
// const fn_v3 = debounce_v3(test, 2000);
// fn_v3('v3)
// setTimeout(() => {
//   fn_v3("v3");
// }, 1000);

/** 立刻执行 */
function debounce_v4(fn, delay, immediate) {
  let timerId;
  let debounce = function () {
    let context = this;
    let args = Array.from(arguments);
    if (timerId) clearTimeout(timerId);
    if (immediate) {
      let callNow = !timerId;
      timerId = setTimeout(() => {
        timerId = null;
      }, delay);
      if (callNow) {
        fn.apply(context, args);
      }
    } else {
      timerId = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
  };
  return debounce;
}
// const fn_v4 = debounce_v4(test, 2000, true);
// fn_v4("v4");
// setTimeout(() => {
//   fn_v4("v4");
// }, 1000);

/** 返回值 */
function debounce_v5(fn, delay, immediate) {
  let timerId;
  let debounce = function () {
    let context = this;
    let args = Array.from(arguments);
    if (timerId) clearTimeout(timerId);
    let result;
    if (immediate) {
      if (!timerId) result = fn.apply(context, args);
      timerId = setTimeout(() => {
        timerId = null;
      }, delay);
    } else {
      timerId = setTimeout(() => {
        timerId = null;
        fn.apply(context, args);
      }, delay);
    }
    return result;
  };
  return debounce;
}
// const fn_v5 = debounce_v5(test, 1000, true);
// console.log(fn_v5("v5"));
// setTimeout(() => {
//   console.log(fn_v5("v5"));
// }, 2000);

/** 取消 */
function debounce_v6(fn, delay, immediate) {
  let timerId, result;
  let debounce = function () {
    let context = this;
    let args = Array.from(arguments);
    if (timerId) clearTimeout(timerId);
    if (immediate) {
      let callNow = !timerId;
      timerId = setTimeout(() => {
        timerId = null;
      }, delay);
      if (callNow) result = fn.apply(context, args);
    } else {
      timerId = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
    return result;
  };
  debounce.cancel = function () {
    clearTimeout(timerId);
    timerId = null;
  };
  return debounce;
}

// const fn_v6 = debounce_v6(test, 1000);
// console.log(fn_v6("v6"));
// console.log(fn_v6("v6"));
// fn_v6.cancel();
// fn_v6("v6");
// setTimeout(() => {
//   fn_v6("v6");
// }, 2000);

function debounce_v7(fn, wait = 50, immediate = true) {
  let timerId, context, args;
  // 延迟执行函数
  const later = () =>
    setTimeout(() => {
      timerId = null;
      if (!immediate) {
        fn.apply(context, args);
        context = args = null;
      }
    }, wait);

  function debounced(...params) {
    if (!timerId) {
      timerId = later();
      if (immediate) {
        fn.apply(context, params);
      } else {
        context = this;
        args = params;
      }
    } else {
      clearTimeout(timerId);
      timerId = later();
    }
  }
  debounced.cancel = function () {
    clearTimeout(timerId);
    timerId = context = args = null;
  };
  return debounced;
}
const fn_v7 = debounce_v7(test, 2000, true);
fn_v7("v7");
setTimeout(() => {
  fn_v7("v7");
}, 1000);
