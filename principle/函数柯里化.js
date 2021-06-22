function add(...args) {
  return args.reduce((prev, cur) => prev + cur);
}
// sub_curry 的作用就是用函数包裹原函数，然后给原函数传入之前的参数，
// 当执行 fn0(...)(...) 的时候，执行包裹函数，返回原函数，然后再调用 sub_curry 再包裹原函数，
// 然后将新的参数混合旧的参数再传入原函数，直到函数参数的数目达到要求为止。
const curry_v1 = function (fn, ...args) {
  const _args = args;
  return function () {
    var newArgs = _args.concat(...arguments);
    return fn.apply(this, newArgs);
  };
};

let addCurry;

addCurry = curry_v1(add, 1, 2);
console.log(addCurry(3, 4));

addCurry = curry_v1(add, 1);
console.log(addCurry(2));

addCurry = curry_v1(add);
console.log(addCurry(1, 2, 3));

const curry_v2 = function (fn, length) {
  length = length || fn.length;
  return function () {
    if (arguments.length < length) {
      const combined = [fn].concat(...arguments);
      return curry_v2(
        curry_v1.apply(this, combined),
        length - arguments.length
      );
    } else {
      return fn.apply(this, arguments);
    }
  };
};

addCurry = curry_v2(function (a, b, c) {
  console.log(a + b + c);
  return a + b + c;
});
addCurry(1, 2, 3);
addCurry(1, 2)(3);
addCurry(1)(2)(3);

// 简化版
function sub_curry(fn) {
  return function () {
    return fn();
  };
}
function curry(fn, length) {
  length = length || 4;
  return function () {
    if (length > 1) {
      return curry(sub_curry(fn), --length);
    } else {
      return fn();
    }
  };
}
var fn0 = function () {
  console.log(1);
};
var fn1 = curry(fn0);
fn1()()()();

const curry_v2_easy = function (fn, args = []) {
  const length = fn.length;
  return function () {
    const _args = args.concat(...arguments);
    if (_args.length < length) {
      return curry_v2_easy.call(this, fn, _args);
    } else {
      fn.apply(this, _args);
    }
  };
};
addCurry = curry_v2_easy(function (a, b, c) {
  console.log("curry_v2_easy", a + b + c);
});
addCurry(1)(2)(3);

const curry_v3 = function (fn, args = [], holes = []) {
  const length = fn.length;
  return function () {
    const _args = args.concat(...arguments);
    const realArgs = _args.filter((item) => item !== "_");
    if (realArgs.length < length) {
      return curry_v3.call(this, fn, _args);
    } else {
      fn.apply(this, realArgs);
    }
  };
};
addCurry = curry_v3(function (a, b, c, d) {
  console.log("curry_v3", a + b + c + d);
});
addCurry(1)("_")(2, "_")(3)("_", 4);
