/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));

    dp[1][1] = obstacleGrid[0][0] === 1 ? 0 : 1;

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j<=n; j++) {
            if(i===1 && j===1) continue;

            if (obstacleGrid[i-1][j-1]) continue;

            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }

    return dp[m][n];
};
// @lc code=end

