Object.prototype.zhy = "zhy";
var obj = {
  date: new Date(),
  reg: /why/,
  string: "string",
  obj: {
    obj: {},
  },
};
Object.defineProperties(obj, {
  enumerable: {
    enumerable: false,
    value: 2,
  },
});
obj.self = obj;

function deepClone_v1(obj) {
  if (typeof obj !== "object") return;
  const newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone_v1(obj[key]) : obj[key];
    }
  }
  return newObj;
}
// console.log(deepClone_v1(obj));

function isObject(target) {
  return (
    (typeof target === "object" || typeof target === "function") &&
    target !== null
  );
}
function deepClone_v2(obj, map = new WeakMap()) {
  if (map.has(obj)) return obj;
  let constructor = obj.constructor;
  if (/^(RegExp|Date)$/i.test(constructor.name)) {
    return new constructor(obj);
  }
  if (isObject(obj)) {
    map.set(obj, true);
    const cloneObj = Object.create(
      Reflect.getPrototypeOf(obj),
      Reflect.getOwnPropertyDescriptor(obj)
    );
    for (const key of Reflect.ownKeys(obj)) {
      cloneObj[key] = isObject(obj[key])
        ? deepClone_v2(obj[key], map)
        : obj[key];
    }
    return cloneObj;
  } else {
    return obj;
  }
}
console.log(deepClone_v2(obj));
