/*
 * @lc app=leetcode.cn id=383 lang=javascript
 * @lcpr version=30100
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();

    for (const char of magazine) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        if (!map.has(char)) {
            return false;
        }

        map.set(char, map.get(char) - 1);

        if (map.get(char) === 0) {
            map.delete(char);
        }
    }

    return true;
    
};
// @lc code=end



/*
// @lcpr case=start
// "a"\n"b"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"ab"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"aab"\n
// @lcpr case=end

 */

