/*
 * @lc app=leetcode.cn id=2116 lang=javascript
 * @lcpr version=30100
 *
 * [2116] 判断一个括号字符串是否有效
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {
    const n = s.length; // Length of the string

    if (n % 2 === 1) return false;

    let open = 0, close = 0;

    for (let i = 0, j = n - 1; i < n && j >= 0; i++, j--) {
        // '0' in the locked string represents an unlocked position that can be treated as either '(' or ')'
        if (s[i] === '(' || locked[i] === '0') open++;
        else open--;

        if (s[j] === ')' || locked[j] === '0') close++;
        else close--;

        if (open < 0 || close < 0) return false; // If the number of open or close brackets is negative, the string is invalid
    }

    return true;
    
};
// @lc code=end



/*
// @lcpr case=start
// "))()))"\n"010100"\n
// @lcpr case=end

// @lcpr case=start
// "()()"\n"0000"\n
// @lcpr case=end

// @lcpr case=start
// ")"\n"0"\n
// @lcpr case=end

// @lcpr case=start
// "(((())(((())"\n"111111010111"\n
// @lcpr case=end

 */

