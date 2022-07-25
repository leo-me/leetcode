/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    if(n === 0 || n === 1) {
        return n;
    }

    let dp1 = 1, dp2 = 0;

    for(let i = 2; i <= n; i++) {
        let dpi = dp1 + dp2;
        dp2 = dp1;
        dp1 = dpi;
    }

    return dp1;

};
// @lc code=end

