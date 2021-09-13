/** 返回函数 */
Function.prototype.bind_v1 = function (context) {
  const self = this;
  return function () {
    // 考虑到可能返回值
    return self.apply(context);
  };
};
// var foo = {
//   value: 1,
// };
// function bar(name, age) {
//   console.log(this.value);
// }
// bar.bind(foo)(); // 1

/**
 * 优化
 * 可以传参
 *  */
Function.prototype.bind_v2 = function (context) {
  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);
  return function () {
    const bindArgs = args.concat(arguments);
    return self.apply(context, bindArgs);
  };
};
// var foo = {
//   value: 1,
// };
// function bar(name, age) {
//   console.log(this.value, name, age);
// }
// bar.bind(foo, "zhy")(26);

var foo = {
  value: 1,
};
function bar(name, age) {
  console.log(this.__proto__.constructor.name, this.value);
  this.name = name;
  this.age = age;
}

/**
 * 构造函数模拟实现
 * 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
 * */
Function.prototype.bind_v3 = function (context) {
  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);
  const fBound = function () {
    const bindArgs = args.concat(arguments);
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return self.apply(this instanceof fBound ? this : context, bindArgs);
  };
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  fBound.prototype = this.prototype;
  return fBound;
};

// const Foo = bar.bind(foo);
// const Foo_v2 = bar.bind_v2(foo);
// const Foo_v3 = bar.bind_v3(foo);
// const zhy = new Foo("zhy", 26);
// const zhy_v2 = new Foo_v2("zhy", 26);
// const zhy_v3 = new Foo_v3("zhy", 26);
// console.log("zhy", zhy);
// console.log("zhy_2", zhy_v2);
// console.log("zhy_3", zhy_v3);

/**
 * 构造函数优化
 * 在v3中，直接将fBound.prototype = this.prototype, 因为是同一个引用，修改fBound.prototype时，也会修改绑定函数的prototype
 * 可以通过中转函数优化
 *  */
Function.prototype.bind_v4 = function (context) {
  const self = this;
  let args = Array.prototype.slice.call(arguments, 1);
  const fNOP = function () {};
  const fBound = function () {
    args = args.concat(arguments);
    return self.apply(this instanceof fBound ? this : context, args);
  };
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};
const Foo_v4 = bar.bind_v4(foo);
const zhy_v4 = new Foo_v4("zhy", 26);
console.log("zhy_4", zhy_v4);

/** 最终版 */
Function.prototype.bind_v5 = function (context, ...args) {
  // 调用函数的不是bind
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  const self = this;
  function noop() {}
  const fBound = function () {
    args = args.concat(...arguments);
    return self.apply(this instanceof fBound ? this : context, args);
  };
  noop.prototype = this.prototype;
  fBound.prototype = new noop();
  return fBound;
};

const Foo = bar.bind(foo);
const zhy = new Foo("zhy", 26);
console.log("foo", zhy);
const Foo_v5 = bar.bind_v5(foo);
const zhy_v5 = new Foo_v5("zhy", 26);
console.log("foo_v5", zhy_v5);
