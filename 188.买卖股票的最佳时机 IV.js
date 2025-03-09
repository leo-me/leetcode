/*
 * @lc app=leetcode.cn id=188 lang=javascript
 * @lcpr version=30100
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (prices.length === 0) return 0;
  
  if (k >= prices.length / 2) {
    let dp0 = 0, dp1 = -prices[0];
    for (let i = 1; i < prices.length; i++) {
      dp0 = Math.max(dp0, dp1 + prices[i]);
      dp1 = Math.max(dp1, dp0 - prices[i]);
    }
    return dp0;
  }

  const dp = new Array(k * 2).fill(0);
  for (let i = 0; i < k; i++) {
    dp[i * 2 + 1] = -prices[0];
  }
  for (let i = 1; i < prices.length; i++) {
    for (let j = 0; j < k; j++) {
      dp[j * 2] = Math.max(dp[j * 2], dp[j * 2 + 1] + prices[i]);
      dp[j * 2 + 1] = Math.max(dp[j * 2 + 1], dp[j * 2] - prices[i]);
    }
  }
  return dp[k * 2 - 2]; 
    
};
// @lc code=end



/*
// @lcpr case=start
// 2\n[2,4,1]\n
// @lcpr case=end

// @lcpr case=start
// 2\n[3,2,6,5,0,3]\n
// @lcpr case=end

 */

