Function.prototype.apply_v1 = function (context, arr) {
  context = context || window; // context可以为null
  context.fn = this;
  if (arr === undefined || arr === null) {
    return context.fn();
  }
  var result;
  const args = [];
  for (let i = 0; i < arr.length; i++) {
    args.push("arr[" + i + "]");
  }
  result = eval("context.fn(" + args + ")");
  delete context.fn;
  return result;
};
const value = 2;
const foo = {
  value: 1,
};
const bar = function (name, age) {
  console.log(this.value, name, age);
};
bar.apply_v1(foo, ["zhy", 27]);
bar.apply_v1(null, ["zhy", 27]);
