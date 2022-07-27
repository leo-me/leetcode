/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
    // m 最多不会超过 n 次（线性扫描）
    // 初始化一个 (k+1)(n+1) 的矩阵
    let dp = new Array(k + 1);

    // base case:
    // dp[0][..] = 0
    // dp[..][0] = 0
    // 初始化数组都为 0
    for (let i = 0; i < k + 1; i++) {
        dp[i] = new Array(n + 1);
        dp[i].fill(0, 0, n + 1);
    }

    let m = 0;
    while (dp[k][m] < n) {
        m++;
        for (let j = 1; j <= k; j++) {
            dp[j][m] = dp[j][m - 1] + dp[j - 1][m - 1] + 1;
        }
    }
    return m;
};
// @lc code=end

