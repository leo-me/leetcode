/*
 * @lc app=leetcode.cn id=338 lang=javascript
 * @lcpr version=30100
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        res[i] = res[i & (i - 1)] + 1;
    }
    return res;

};
// @lc code=end



/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 5\n
// @lcpr case=end

 */

