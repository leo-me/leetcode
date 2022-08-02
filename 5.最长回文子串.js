/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (36.88%)
 * Likes:    5465
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 3M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    var plindrome = function(s, left, right) {
        while(left >=0 & right < s.length && s[left] == s[right]) {
            left --;
            right++;
        }
        return s.slice(left+1, right);
    }

    let res = '';

    for(let i=0; i< s.length;i++) {
        let s1 = plindrome(s, i, i);
        let s2 = plindrome(s, i, i+1);
        res = res.length > s1.length ? res : s1;
        res = res.length > s2.length ? res : s2;
    }

    return res;
};
// @lc code=end

