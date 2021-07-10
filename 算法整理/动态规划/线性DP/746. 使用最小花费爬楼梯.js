/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = [0, 0],
    n = cost.length;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];
};

var minCostClimbingStairs_v2 = function (cost) {
  let cur = 0,
    next = 0,
    n = cost.length;
  for (let i = 2; i <= n; i++) {
    let temp = Math.min(cur + cost[i - 2], next + cost[i - 1]);
    cur = next;
    next = temp;
  }
  return next;
};
