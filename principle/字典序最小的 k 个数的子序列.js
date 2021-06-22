function findSmallSeq(arr, k) {
  const length = arr.length;
  const stack = [];
  for (let i = 0; i < length; i++) {
    if (stack.length === 0) {
      stack.push(arr[i]);
      continue;
    }
    let top = stack[stack.length - 1];
    while (arr[i] < top && stack.length + length - i > k) {
      stack.pop();
      top = stack[stack.length - 1];
    }
    if (stack.length < k) {
      stack.push(arr[i]);
    }
  }
  return stack;
}
console.log(findSmallSeq([9, 2, 4, 5, 1, 2, 3, 0], 3));
