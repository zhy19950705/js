/**
 * 暴力法
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; i < prices.length; i++) {
      if (prices[j] > prices[i]) {
        max = Math.max(prices[j] - prices[i], max);
      }
    }
  }
  return max;
};

/**
 * 一次遍历
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > max) {
      max = prices[i] - minPrice;
    }
  }
  return max;
};
