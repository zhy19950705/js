function instanceOf(left, right) {
  if (typeof left !== "object" || left === null) return false;
  // 获得类型的原型
  let rightPrototype = right.prototype; // Object.prototype
  // 获得对象的原型
  var leftPrototype = left.__proto__; // person.__proto__
  // 判断对象的类型是否等于类型的原型
  while (true) {
    if (leftPrototype === null) return false;
    if (leftPrototype === rightPrototype) return true;
    leftPrototype === leftPrototype.__proto__;
  }
}
console.log(instanceOf(new Number(1), Number));
