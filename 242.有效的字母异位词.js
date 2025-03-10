/*
 * @lc app=leetcode.cn id=242 lang=javascript
 * @lcpr version=30100
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map = new Map();

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (const char of t) {
        if (!map.has(char)) {
            return false;
        }

        map.set(char, map.get(char) - 1);
        
        if (map.get(char) === 0) {
            map.delete(char);
        }
    }

    return map.size === 0;
    
};
// @lc code=end



/*
// @lcpr case=start
// "anagram"\n"nagaram"\n
// @lcpr case=end

// @lcpr case=start
// "rat"\n"car"\n
// @lcpr case=end

 */

