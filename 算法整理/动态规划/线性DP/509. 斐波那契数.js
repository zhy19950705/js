/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let cur = 0,
    next = 1;
  for (let i = 0; i < n; i++) {
    let temp = cur + next;
    cur = next;
    next = temp;
  }
  return cur;
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
