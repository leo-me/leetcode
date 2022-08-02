/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    let m = haystack.length, n=needle.length;

    let i = 0, j = 0;

    while(i <= m-1 && j <= n-1) {
        while(haystack[i] === needle[j]) {
            i++;
            j++;
        }


    }



};
// @lc code=end

