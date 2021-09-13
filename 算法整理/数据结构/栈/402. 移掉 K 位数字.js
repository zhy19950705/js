/**
 * https://leetcode-cn.com/problems/remove-k-digits/
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = [],
    remain = num.length - k;
  for (let s of num) {
    while (k && stack.length && stack[stack.length - 1] > s) {
      stack.pop();
      k--;
    }
    stack.push(s);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  let result = "",
    isLeadingZero = true;
  for (let digit of stack) {
    if (isLeadingZero && digit === "0") {
      continue;
    }
    isLeadingZero = false;
    result += digit;
  }
  return result === "" ? "0" : result;
};
