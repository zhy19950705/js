/**
 * 中心扩散
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const result = Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) continue;
    // 定义两个指针 l, r 分别向左、右两个方向寻找目标字符 C，取最短距离
    let left = i,
      right = i,
      min = Infinity;
    while (left >= 0) {
      if (s[left] === c) {
        min = Math.min(min, i - left);
        break;
      }
      left--;
    }
    while (right < s.length) {
      if (s[right] === c) {
        min = Math.min(min, right - i);
        break;
      }
      right++;
    }
    result[i] = min;
  }
  return result;
};

/**
 * 时间换空间
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const length = s.length;
  // 记录 C 字符在 S 字符串中出现的所有下标
  const cIndex = [];
  for (let i = 0; i < length; i++) {
    if (s[i] === c) cIndex.push(i);
  }
  const result = Array(length).fill(Infinity);
  for (let i = 0; i < length; i++) {
    // 目标字符，距离是 0
    if (s[i] === c) {
      result[i] = 0;
      continue;
    }
    // 非目标字符，到下标数组中找最近的下标
    for (let index of cIndex) {
      const dist = Math.abs(index - i);
      // 小小剪枝一下
      // 注：因为 cIndex 中的下标是递增的，后面的 dist 也会越来越大，可以排除
      if (dist >= res[i]) break;
      res[i] = dist;
    }
  }
  return res;
};

/**
 * 贪心
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const length = s.length;
  const result = Array(length);
  for (let i = 0; i < length; i++) {
    if (s[i] === c) {
      result[i] = 0;
    } else {
      result[i] = result[i - 1] ? result[i - 1] + 1 : Infinity;
    }
  }
  for (let i = length - 1; i >= 0; i--) {
    if (result[i] === Infinity || result[i + 1] + 1 < result[i]) {
      result[i] = result[i + 1] + 1;
    }
  }
  return res;
};
