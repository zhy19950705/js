class People {
  #id = 1; // 私有字段，约定以单个的`#`字符为开头
  name = "Tom"; // 公共字段
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

// 将类的公共字段映射为实例对象的属性
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

// 转化后的私有字段（会自动检查命名冲突）
var _id = /*#__PURE__*/ new WeakMap();

var People = function People() {
  _classCallCheck(this, People);

  // 初始化私有字段
  _id.set(this, {
    writable: true,
    value: 1,
  });

  // 将类的公共字段映射为实例对象的属性
  _defineProperty(this, "name", "Tom");
}; // 公共字段
