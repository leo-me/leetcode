/*
 * @lc app=leetcode.cn id=69 lang=javascript
 * @lcpr version=30005
 *
 * [69] x 的平方根 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    while (left < right) {
        let mid = left + Math.floor((right - left + 1) / 2);
        if (mid * mid > x) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return left;
};
// @lc code=end



/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 8\n
// @lcpr case=end

 */

