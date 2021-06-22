/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (coins.length === 0) return -1;
  let dp = [];
  dp[0] = 0;
  for (let i = 1; i < amount; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i && dp[i - coins[j]] < min) {
        min = dp[i - coins[j]] + 1;
      }
    }
    dp[i] = min;
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};
