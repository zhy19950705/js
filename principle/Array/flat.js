const arr = [1, [2, [3, [4, [5]]]]];
/**
 * ES5
 */
function flat_recurision(arr = []) {
  let result = [],
    n = arr.length;
  for (let i = 0; i < n; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flat_recurision(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log("flat_recurision ", flat_recurision(arr), arr);

/**
 * ES6 扩展运算符
 */
function flat_cycle(arr = []) {
  while (arr.some((v) => Array.isArray(v))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log("flat_cycle ", flat_cycle(arr), arr);

/** ES6 flat */
function flat_es6(arr = [], deep = Infinity) {
  return arr.flat(deep);
}
console.log("flat_es6", flat_es6(arr), arr);

/** Reg replace split
 * 返回都是字符串
 */
function flat_reg_split(arr = []) {
  return JSON.stringify(arr)
    .replace(/(\[|\])/g, "")
    .split(",");
}
console.log("flat_reg_split ", flat_reg_split(arr), arr);

/** replace JSON.parse */
function flat_reg_parse(arr = []) {
  let str = JSON.stringify(arr).replace(/(\[|\])/g, "");
  str = "[" + str + "]";
  return JSON.parse(str);
}
console.log("flat_reg_parse ", flat_reg_parse(arr), arr);

/** reducer */
function flat_reduce(arr = []) {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flat_reduce(cur) : cur);
  }, []);
}
console.log("flat_reduce ", flat_reduce(arr), arr);
