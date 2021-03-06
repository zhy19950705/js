const selfMap = function (fn, context) {
  if (this === undefined || this === null) {
    throw new Error("Cannot read property 'map' of null or undefined");
  }
  if (typeof fn !== "function") {
    throw new Error(fn + " is not a function");
  }
  let O = Object(this);
  let T = context;

  let arr = Array.prototype.slice.call(this);
  let mappedArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    mappedArr[i] = fn.call(context, arr[i], i, this);
  }
  return mappedArr;
};
Array.prototype.selfMap = selfMap;
let arr = new Array(1, 2, 3);
console.log(
  "selfMap",
  arr.selfMap((number) => number * 3)
);
