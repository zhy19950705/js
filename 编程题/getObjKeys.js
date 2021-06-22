/**
 * 从最外层到最内层，从上到下，层序遍历获取对象的 key
 */
// 标准连续层序遍历问题
function getKeys(obj) {
  const result = [];
  const queue = [obj];
  while (queue.length) {
    const obj = queue.shift();
    const keys = Object.keys(obj);
    result.push(...keys);
    keys.forEach((key) => {
      typeof obj[key] === "object" && queue.push(obj[key]);
    });
  }
  return result;
}

/**
 * 从最内层到最外层，从上到下，层序遍历获取对象的 key
 */
// 连续层序遍历
function getKeys_v1(obj) {
  const result = [];
  const queue = [obj];
  while (queue.length) {
    const o = queue.shift();
    const keys = Object.keys(o);
    result.unshift(...keys);
    keys.reverse().forEach((key) => {
      typeof o[key] === "object" && queue.push(o[key]);
    });
  }
  return result;
}

const obj = {
  a: {
    b: {
      c: {
        f: "aa",
      },
    },
    d: {
      e: {
        g: "bb",
      },
      h: {
        i: "cc",
      },
    },
    j: {
      k: "dd",
    },
  },
  l: {
    m: {
      n: "ee",
    },
    o: "ff",
    p: "gg",
    q: {
      r: "hh",
      s: {
        t: "ii",
      },
    },
  },
};
console.log(getKeys(obj));
console.log(getKeys_v1(obj));
