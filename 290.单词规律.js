/*
 * @lc app=leetcode.cn id=290 lang=javascript
 * @lcpr version=30100
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = new Map();
    const words = s.split(' ');

    if (pattern.length !== words.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i])) {
            if (map.get(pattern[i]) !== words[i]) {
                return false;
            }
        } else {
            if (Array.from(map.values()).includes(words[i])) {
                return false;
            }
            map.set(pattern[i], words[i]);
        }
    }

    return true;
};
// @lc code=end



/*
// @lcpr case=start
// "abba"\n"dog cat cat dog"\n
// @lcpr case=end

// @lcpr case=start
// "abba"\n"dog cat cat fish"\n
// @lcpr case=end

// @lcpr case=start
// "aaaa"\n"dog cat cat dog"\n
// @lcpr case=end

 */

