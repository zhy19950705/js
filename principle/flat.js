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
console.log(flat_recurision(arr));

/**
 * ES6
 */
function flat_cycle(arr = []) {
  while (arr.some((v) => Array.isArray(v))) {
    arr = [].concat(...arr);
  }
}
