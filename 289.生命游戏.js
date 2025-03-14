/*
 * @lc app=leetcode.cn id=289 lang=javascript
 * @lcpr version=30100
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length;
    const n = board[0].length;
    const copy = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const dx = [0, 0, 1, -1, 1, -1, 1, -1];
    const dy = [1, -1, 0, 0, 1, -1, -1, 1];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            copy[i][j] = board[i][j];
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let live = 0;
            
            for (let k = 0; k < 8; k++) {
              
                const x = i + dx[k];
                const y = j + dy[k];
                if (x < 0 || x >= m || y < 0 || y >= n) {
                    continue;
                }
                live += copy[x][y];
            }

            if (copy[i][j] === 1) {

                if (live < 2 || live > 3) {
                    board[i][j] = 0;
                }
            } else {
                if (live === 3) {
                    board[i][j] = 1;
                }
            }
        }
    }
    
};
// @lc code=end



/*
// @lcpr case=start
// [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[1,0]]\n
// @lcpr case=end

 */

