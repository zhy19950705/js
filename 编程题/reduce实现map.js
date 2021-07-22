Array.prototype.reduceMap = function (cb, context) {
  const result = [];
  this.reduce((prev, cur, i, array) => {
    result[i] = cb.call(context, cur, i, array);
  }, 0);
  return result;
};
const result = new Array(2, 3, 4).reduceMap((item, index, array) => {
  console.log(item, index, array);
  return item * 2;
});
console.log(result);
