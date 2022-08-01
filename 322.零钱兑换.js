/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let memo = new Array(amount+1).fill(-Infinity);

    function dp(coins, amount) {
        if(amount === 0) return 0;

        if(amount < 0) return -1;

        if(memo[amount] !== -Infinity) {
            return memo[amount];
        }

        let res = Infinity;
        for(let i in coins) {
            let subProblem = dp(coins, amount - coins[i]);

            if(subProblem === -1) continue;

            res = Math.min(res, subProblem +1);
        }
        memo[amount] = (res === Infinity) ? -1 : res;

        return memo[amount];
    }

    return dp(coins, amount);

};
// @lc code=end

