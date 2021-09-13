const origin = [2, 10, 3, 4, 5, 11, 10, 11, 20];
const result = [[2, 3, 4, 5], [10, 11], [20]];
function fn_v1(arr) {
  arr.sort((a, b) => a - b);
  const result = [];
  let temp = [];
  arr.forEach((item) => {
    if (temp.length === 0) {
      temp.push(item);
    } else {
      const lastItem = temp[temp.length - 1];
      const v = item - lastItem;
      if (v === 1) {
        temp.push(item);
      } else if (v > 1) {
        result.push(temp.slice());
        temp = [item];
      }
    }
  });
  if (temp.length > 0) {
    result.push(temp);
  }
  return result;
}
console.log(fn_v1(origin));
