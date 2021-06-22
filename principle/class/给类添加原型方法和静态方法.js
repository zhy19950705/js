class People {
  #id = 1;
  name = "Tom";

  constructor(id, name, age) {
    this.#id = id;
    this.name = name;
    this.age = age;
  }

  // 原型方法
  getName() {
    return this.name;
  }

  // 静态方法
  static sayHello() {
    console.log("hello");
  }
}

("use strict");

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

// 将类的方法映射到构造函数的原型（Constructor.prototype）的属性上
// 将类的静态方法映射到构造函数（Constructor）的属性上
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError(
      "attempted to " + action + " private field on non-instance"
    );
  }
  return privateMap.get(receiver);
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

var _id = /*#__PURE__*/ new WeakMap();

var People = /*#__PURE__*/ (function () {
  function People(id, name, age) {
    _classCallCheck(this, People);

    _id.set(this, {
      writable: true,
      value: 1,
    });

    _defineProperty(this, "name", "Tom");

    _classPrivateFieldSet(this, _id, id);

    this.name = name;
    this.age = age;
  } // 原型方法

  // 设置类的方法和静态方法
  _createClass(
    People,
    [
      {
        key: "getName",
        value: function getName() {
          return this.name;
        }, // 静态方法
      },
    ],
    [
      {
        key: "sayHello",
        value: function sayHello() {
          console.log("hello");
        },
      },
    ]
  );

  return People;
})();
