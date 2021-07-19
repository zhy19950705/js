function uniq(array) {
  let obj = {};
  return array.filter(function (item, index, array) {
    return obj.hasOwnProperty(typeof item + JSON.stringify(item))
      ? false
      : (obj[typeof item + JSON.stringify(item)] = true);
  });
}
var array = [
  1,
  1,
  "1",
  "1",
  null,
  null,
  undefined,
  undefined,
  new String("1"),
  new String("1"),
  /a/,
  /a/,
  NaN,
  NaN,
  {},
  {},
];

/**
 * Set
 * 不考虑兼容性的话，代码量最少
 * 不能去重: 对象，正则
 * */
function uniq_es6(arr = []) {
  return [...new Set(arr)];
}
console.log(uniq_es6(array));

/**
 * 双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。
 * 不能去重: 对象, 正则， NaN
 * */
function uniq_splice(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
console.log(uniq_splice(array));

/**
 * indexOf
 * 不能去重: 对象, 正则， NaN
 */
function uniq_indexOf(arr = []) {
  let result = [],
    n = arr.length;
  for (let i = 0; i < n; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(uniq_indexOf(array));

/**
 * indexOf
 * 不能去重: 对象, 正则
 */
function uniq_includes(arr = []) {
  let result = [],
    n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(uniq_includes(array));

/**
 * obj
 * 非严格相等的被去重了
 */
function uniq_obj(arr = []) {
  const obj = {},
    result = [],
    n = arr.length;
  for (let i = 0; i < n; i++) {
    if (!obj[arr[i]]) {
      result.push(arr[i]);
      obj[arr[i]] = true;
    }
  }
  return result;
}
console.log(uniq_obj(array)); // [ 1, null, undefined, /a/, NaN, {} ]

/**
 * filter
 * 不能去重: 对象
 * NaN不见了
 */
function uniq_filter(arr = []) {
  return arr.filter((v, i) => arr.indexOf(v) === i);
}
console.log(uniq_filter(array));

/**
 * typeof obj
 * 完美去重
 */
function uniq_typeof_obj(arr = []) {
  const obj = {};
  return arr.filter((v) => {
    return obj[typeof v + v] ? false : (obj[typeof v + v] = true);
  });
}
console.log(uniq_typeof_obj(array));
