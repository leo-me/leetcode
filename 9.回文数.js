/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // let str = `${x}`;
    // let reverseStr = `${x}`.split('').reverse().join('');
    return `${x}` === `${x}`.split('').reverse().join('');

};
// @lc code=end

