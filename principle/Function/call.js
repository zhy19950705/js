/**
 * https://github.com/mqyqingfeng/Blog/issues/11
 * 将函数设为对象的属性
 * 执行该函数
 * 删除该函数
 */
Function.prototype.call_v1 = function (context) {
  // 首先要获取调用call的函数，用this可以获取
  context.fn = this;
  context.fn();
  delete context.fn;
};

// const foo = {
//   value: 1,
// };
// function bar() {
//   console.log(this.value);
// }
// bar.call_v1(foo);

/**
 * 可以传入参数
 * 参数个数不确定，使用
 */
Function.prototype.call_v2 = function (context) {
  context.fn = this;
  const args = [];
  // 执行后 args为 ["arguments[1]", "arguments[2]"]
  for (let i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }
  // args 会自动调用 Array.toString() 这个方法。
  eval("context.fn(" + args + ")");
  delete context.fn;
};
// const foo = {
//   value: 1,
// };
// function bar(name, age) {
//   console.log(this.value, name, age);
// }
// bar.call_v2(foo, "zhy", 26);

/**
 * 有返回值
 * this可以传null
 */
Function.prototype.call_v3 = function (context) {
  context = context || window; // context为null
  context.fn = this;
  const _args = [];
  for (let i = 1; i < arguments.length; i++) {
    _args.push("arguments[" + i + "]");
  }
  const result = eval("context.fn(" + _args + ")");
  delete context.fn;
  return result;
};

// 测试一下
var value = 2;
var obj = {
  value: 1,
};
function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age,
  };
}
bar.call_v3(null); // 2
console.log(bar.call_v2(obj, "kevin", 18));
