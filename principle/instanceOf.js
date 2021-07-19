function instanceOf(left, right) {
  if (typeof left !== "object" || left === null) return false;
  var __proto__ = Reflect.getPrototypeOf(left);

  while (true) {
    if (__proto__ === null) return false;
    if (__proto__ === right.prototype) return true;
    __proto__ = Reflect.getPrototypeOf(proto);
  }
}
console.log(instanceOf(new Number(1), Number));
