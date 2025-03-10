/*
 * @lc app=leetcode.cn id=201 lang=javascript
 * @lcpr version=30100
 *
 * [201] 数字范围按位与
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let shift = 0;
    while(left < right) {
        left >>= 1;
        right >>= 1;
        shift++;
    }
    return left << shift;
    
};
// @lc code=end



/*
// @lcpr case=start
// 5\n7\n
// @lcpr case=end

// @lcpr case=start
// 0\n0\n
// @lcpr case=end

// @lcpr case=start
// 1\n2147483647\n
// @lcpr case=end

 */

