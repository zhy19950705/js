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

function deepClone_v2(obj) {
  return JSON.parse(JSON.stringify(obj));
}
// console.log(deepClone_v2(obj));

function isObject(target) {
  return (
    (typeof target === "object" || typeof target === "function") &&
    target !== null
  );
}
function deepClone_v3(obj, map = new WeakMap()) {
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
// console.log(deepClone_v3(obj));

function deepClone_v4(obj) {
  const root = {};
  const weakMap = new WeakMap();
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: obj,
    },
  ];

  while (loopList.length) {
    const node = loopList.shift();
    const { parent, key, data } = node;
    let res = parent;
    if (typeof key !== "undefined") {
      res = parent[key] = {};
    }
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (weakMap.has(data[k])) {
          res[k] = data[k];
          continue;
        }
        let constructor = data[k].constructor;
        if (/^(RegExp|Date)$/i.test(constructor.name)) {
          res[k] = new constructor(data[k]);
        } else if (isObject(data[k])) {
          weakMap.set(data[k], true);
          loopList.push({
            parent: res,
            key: k,
            data: data[k],
          });
        } else {
          res[k] = data[k];
        }
      }
    }
  }
  return root;
}
console.log(deepClone_v4(obj));
