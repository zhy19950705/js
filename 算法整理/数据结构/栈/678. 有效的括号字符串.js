/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  const length = s.length;
  const star = [],
    left = [];
  for (let i = 0; i < length; i++) {
    const c = s[i];
    if (c === "(") {
      left.push(i);
    } else if (c === "*") {
      star.push(i);
    } else {
      if (left.length === 0) {
        if (star.length === 0) {
          return false;
        } else {
          star.pop();
        }
      } else {
        left.pop();
      }
    }
  }
  if (left.length > star.length) return false;
  while (left.length && start.length) {
    if (left.pop() > star.pop()) return false;
  }
  return true;
};
