/*
 * @lc app=leetcode.cn id=139 lang=javascript
 * @lcpr version=30005
 *
 * [139] 单词拆分
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= n; i++) {
        for (let word of wordDict) {
            const len = word.length;
            if (i >= len && s.slice(i - len, i) === word) {
                dp[i] = dp[i] || dp[i - len];
            }
        }
    }
    return dp[n];
};
// @lc code=end



/*
// @lcpr case=start
// "leetcode"\n["leet", "code"]\n
// @lcpr case=end

// @lcpr case=start
// "applepenapple"\n["apple", "pen"]\n
// @lcpr case=end

// @lcpr case=start
// "catsandog"\n["cats", "dog", "sand", "and", "cat"]\n
// @lcpr case=end

 */

