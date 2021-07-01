/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let prev = 1,
    cur = 1;
  for (let i = 2; i < n + 1; i++) {
    let temp = prev + cur;
    prev = cur;
    cur = temp;
  }
  return cur;
};
