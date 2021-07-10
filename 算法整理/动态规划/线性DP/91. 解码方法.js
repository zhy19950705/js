/**
 * @param {string} s
 * @return {number}
 */
var numDecodings_v1 = function (s) {
  const length = s.length;
  const result = Array(length + 1).fill(0);
  result[0] = 1;
  let i;
  for (i = 1; i <= length; i++) {
    if (s[i - 1] !== "0") {
      result[i] += result[i - 1];
    }
    if (i > 1 && s[i - 2] !== "0" && s[i - 2] * 10 + +s[i - 1] <= 26) {
      result[i] += result[i - 2];
    }
  }
  return result[length];
};

console.log(numDecodings_v1("12"));

function numDecodings_v2(s) {
  const length = s.length;
  // a = f[i-2], b = f[i-1], c = f[i]
  let a = 0,
    b = 1,
    c = 0;
  i;
  for (i = 1; i < length + 1; i++) {
    c = 0;
    if (s[i - 1] !== "0") {
      c += b;
    }
    if (i > 1 && s[i - 2] !== "0" && s[i - 2] * 10 + +s[i - 1] <= 26) {
      c += a;
    }
    a = b;
    b = c;
  }
  return c;
}
