/*
 * @lc app=leetcode.cn id=205 lang=javascript
 * @lcpr version=30100
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // 1. 两个字符串长度不相等，直接返回false
    if (s.length !== t.length) return false;

    // 2. 遍历字符串，判断当前字符在字符串中第一次出现的位置
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
    }

    return true;

};
// @lc code=end



/*
// @lcpr case=start
// "egg"\n"add"\n
// @lcpr case=end

// @lcpr case=start
// "foo"\n"bar"\n
// @lcpr case=end

// @lcpr case=start
// "paper"\n"title"\n
// @lcpr case=end

 */

