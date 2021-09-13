/**
 * https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [],
    operates = ["+", "-", "*", "/"];
  for (const token of tokens) {
    if (!operates.includes(token)) {
      stack.push(parseInt(token));
      continue;
    }
    const v1 = stack.pop();
    const v2 = stack.pop();
    switch (token) {
      case "+":
        stack.push(v1 + v2);
        break;
      case "-":
        stack.push(v2 - v1);
        break;
      case "*":
        stack.push(v1 * v2);
        break;
      case "/":
        stack.push(v2 / v1 > 0 ? Math.floor(v2 / v1) : Math.ceil(v2 / v1));
        break;
    }
  }
  return stack[0];
};
