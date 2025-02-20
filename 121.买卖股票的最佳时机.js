/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let dp = new Array(n).fill([]).map(() => new Array(2));

    for(let i = 0; i < n; i++) {
        if(i-1 === -1) {
            dp[i][0] = 0;
            dp[i][1] = -prices[i];
            continue;
        }
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        // 只允许买入一次，所以只有在买入的时候才会减少利润
        dp[i][1] = Math.max(dp[i-1][1], - prices[i]);
    }

    return dp[n-1][0];

};
// @lc code=end

