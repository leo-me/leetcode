/*
 * @lc app=leetcode.cn id=172 lang=javascript
 * @lcpr version=30005
 *
 * [172] 阶乘后的零
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0;
    while(n > 0) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;


};
// @lc code=end



/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

 */

