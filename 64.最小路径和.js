/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode.cn/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (69.29%)
 * Likes:    1302
 * Dislikes: 0
 * Total Accepted:    394.8K
 * Total Submissions: 569.8K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 *
 * 说明：每次只能向下或者向右移动一步。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * 输出：7
 * 解释：因为路径 1→3→1→1→1 的总和最小。
 *
 *
 * 示例 2：
 *
 *
 * 输入：grid = [[1,2,3],[4,5,6]]
 * 输出：12
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let memo = new Array(m).fill([]).map(() => new Array(n).fill(-1));

    function dp(grid, i, j) {
        // bad case
        if(i=== 0 && j === 0) {
            return grid[0][0];
        }

        if (i < 0 || j < 0) {
            return Infinity;
        }


        if(memo[i][j] !== -1) {
            return memo[i][j];
        }

        memo[i][j] = Math.min(dp(grid, i-1, j), dp(grid, i, j-1)) + grid[i][j];

        return memo[i][j];
    }

    return dp(grid, m -1, n -1);

};
// @lc code=end

