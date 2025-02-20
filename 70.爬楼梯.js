/*
 * @lc app=leetcode.cn id=70 lang=javascript
 * @lcpr version=30005
 *
 * [70] 爬楼梯
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // memoization
    let memo = new Array(n + 1).fill(0);
    // definition: the number of ways to climb to the n-th step is dp(n)
    // @visualize status(n)
    function dp(n) {
        // base case
        if (n <= 2) {
            return n;
        }
        if (memo[n] > 0) {
            return memo[n];
        }
        // state transition equation:
        // the number of ways to climb to the n-th step is equal to the sum of the number of ways to climb to (n - 1) and (n - 2).
        memo[n] = dp(n - 1) + dp(n - 2);
        return memo[n];
    }

    return dp(n);
  
};
// @lc code=end



/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */

