class People {
  #id = 1; // 私有字段，约定以单个的`#`字符为开头
  name = "Tom"; // 公共字段

  constructor(id, name, age) {
    this.#id = id;
    this.name = name;
    this.age = age; // 实例属性 age
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

// 设置（修改）类的私有字段
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

var People = // 私有字段，约定以单个的`#`字符为开头
  // 公共字段
  function People(id, name, age) {
    _classCallCheck(this, People);

    _id.set(this, {
      writable: true,
      value: 1,
    });

    _defineProperty(this, "name", "Tom");

    // constructor 从这开始执行
    _classPrivateFieldSet(this, _id, id);

    this.name = name;
    this.age = age; // 实例属性 age
  };
