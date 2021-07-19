function jsonStringify(target) {
  const type = typeof target;
  if (type !== "object") {
    // 可能是 string/number/null/undefined/boolean
    if (Number.isNaN(target) || target === Infinity || target === -Infinity) {
      return "null";
    } else if (
      type === "function" ||
      type === "undefined" ||
      type === "symbol"
    ) {
      return "undefined";
    } else if (type === "string") {
      return `"${target}"`;
    }
    return String(target);
  }
  if (target === null) {
    return "null";
  } else if (target.toJSON && typeof target.toJSON === "function") {
    return jsonStringify(target.toJSON());
  } else if (target instanceof Array) {
    let result = target.map((v, i) => {
      if (
        typeof v === "undefined" ||
        typeof v === "symbol" ||
        typeof v === "function"
      ) {
        return "null";
      } else {
        return jsonStringify(v);
      }
    });
    result = "[" + result + "]";
    return result.replace(/'/g, '"');
  } else {
    // * 循环引用抛错(暂未检测，循环引用时，堆栈溢出)
    // * symbol key 忽略
    // * undefined、函数、symbol 为属性值，被忽略
    let result = [];
    Object.keys(target).forEach((key, i) => {
      if (typeof key !== "symbol") {
        if (
          target[key] !== undefined &&
          typeof target[key] !== "function" &&
          typeof target[key] !== "symbol"
        ) {
          result.push(`"${key}":${jsonStringify(target[key])}`);
        }
      }
    });
    return `{${result}}`.replace(/'/g, '"');
  }
}

const obj = {
  undefined: undefined,
  boolean: true,
  number1: 1,
  number2: NaN,
  number3: Infinity,
  symbol: Symbol(),
  null: null,
  string: "string",
  function: () => {},
  array: [undefined, null, Symbol(), () => {}, 1, "1"],
  reg: /reg/,
  date: new Date(),
  obj1: {
    toJSON() {
      return "toJson";
    },
    test: "obj1",
  },
  obj2: {
    a: undefined,
    b: Symbol(),
    c: () => {},
    d: "1",
    e: 1,
    [Symbol()]: "symbol",
  },
};
console.log(JSON.stringify(obj));
console.log(jsonStringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));
console.log(JSON.parse(jsonStringify(obj)));
