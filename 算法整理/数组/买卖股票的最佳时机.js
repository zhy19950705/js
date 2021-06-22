/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) return 0
    let total = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[i - 1] > 0) {
            total += prices[i] - prices[i - 1]
        }
    }
    return total
};
console.log(maxProfit([7,1,5,3,6,4]))