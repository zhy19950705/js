// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
Object.create_v1 = function (proto, propertyObj) {
  if (typeof proto !== "object" && typeof proto !== "function") {
    throw new Error("Object prototype may only be an Object or null.");
  }
  if (propertyObj === null) {
    throw new Error("Cannot convert undefined or null to object");
  }
  function Fn() {}
  Fn.prototype = proto;
  const obj = new Fn();
  if (propertyObj !== undefined) {
    // 创建一个没有原型对象的对象，Object.create(null)
    Object.defineProperties(obj, propertyObj);
  }
  if (proto === null) {
    obj.__proto__ = null;
  }
  return obj;
};

const obj = {
  why: "why",
};
console.log(Object.create(obj));
console.log(Object.create_v1(obj));
