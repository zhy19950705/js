/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let value of s) {
    switch (value) {
      case "(":
      case "{":
      case "[":
        stack.push(value);
        break;
      case ")":
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          return false;
        }
        break;
      case "}":
        if (stack[stack.length - 1] === "{") {
          stack.pop();
        } else {
          return false;
        }
        break;
      case "]":
        if (stack[stack.length - 1] === "[") {
          stack.pop();
        } else {
          return false;
        }
    }
  }
  return stack.length === 0;
};
