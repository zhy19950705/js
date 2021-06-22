function fn_v1(array = []) {
  const length = array.length;
  if (length === 0) return 0;
  let max = 0;
  for (let i = 0; i < length; i++) {
    let right = i + 1;
    while (right < length) {
      if (array[right] === 1) {
        max = Math.max(max, Math.ceil((right - i) / 2));
        i = right;
        break;
      } else {
        right++;
      }
    }
  }
  return max;
}
console.log(fn_v1([1, 0, 0, 0, 0, 1, 0, 1, 0]));

function fn_v2(array = []) {
  let temp = [];
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      max = Math.max(max, Math.ceil(temp.length / 2) + 1);
      temp.length = 0;
    } else {
      temp.push(i);
    }
  }
  return max;
}
console.log(fn_v2([1, 0, 0, 0, 0, 0, 1, 1, 0]));
