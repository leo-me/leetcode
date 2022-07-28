 /*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length, n = text2.length;

    let dp = new Array(m+1).fill([]).map(i => new Array(n+1));
    // bad case: dp[0][..] = dp[..][0] = 0
    for(let i = 0; i < m+1; i++) {
        dp[i][0] = 0;
    }

    for(let j = 0; j < n+1; j++) {
        dp[0][j] = 0;
    }

    for(let i =1; i<= m; i++) {
        for(let j =1; j <= n; j++) {
            if(text1.charAt(i-1) === text2.charAt(j -1)) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }
        }
    }

    return dp[m][n];

};
// @lc code=end

