/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  let arr = Array(n).fill(a),
    remain = k - n,
    i = n - 1;
  while (remain) {
    if (remain > 25) {
      remain -= 25;
      arr[i--] = "z";
    } else {
      res[i] = String.fromCharCode(97 + remain);
      remain = 0;
    }
  }
  return arr.join("");
};
