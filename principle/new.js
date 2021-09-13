function new_v1() {
  //新建一个对象 obj
  var obj = new Object();
  // 取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
  var Constructor = Array.prototype.shift.call(arguments);
  // 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
  obj.__proto__ = Constructor.prototype;
  // 使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
  Constructor.apply(obj, arguments);
  // 返回 obj
  return obj;
}

function Otaku(name, age) {
  this.name = name;
  this.age = age;
  this.habit = "Games";
}
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
  console.log("I am " + this.name);
};
var person = new_v1(Otaku, "Kevin", "18");
console.log(person.name); // Kevin
console.log(person.habit); // Games
console.log(person.strength); // 60
person.sayYourName(); // I am Kevin

/** 返回值不是对象 */
function new_v2() {
  var constructor = Array.prototype.shift.call(arguments);
  var obj = new Object();
  obj.__proto__ = constructor.prototype;
  var res = constructor.apply(obj, arguments);
  // 确保构造器总是返回一个对象
  return typeof res === "object" ? res : obj;
}

/**
 * obj使用Object.create
 * Object.create实现也使用了new
 * Object.create(null)会报错 Object.create(null)， 是以null为原型，所以没有__proto__ ，
 * */
function new_v3() {
  var constructor = Array.prototype.shift.call(arguments);
  var obj = Object.create(constructor.prototype);
  var res = constructor.apply(obj, arguments);
  return typeof res === "object" ? res : obj;
}

/** 返回值为null等 */
function new_v4() {
  var constructor = Array.prototype.shift.call(arguments);
  var obj = Object.create(constructor.prototype);
  var res = constructor.apply(obj, arguments);
  return res instanceof Object ? res : obj;
}

function new_final() {
  var constructor = Array.prototype.shift.call(arguments);
  if (typeof constructor !== "function") {
    throw new Error("constructor should be a function");
  }

  var obj = Object.create(constructor.prototype);
  var res = constructor.apply(obj, arguments);
  return isObject(res) ? res : obj;
}

function isObject(obj) {
  return (typeof obj === "object" && obj !== null) || typeof obj === "function";
  // return obj instanceof Object
}
