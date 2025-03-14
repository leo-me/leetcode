/*
 * @lc app=leetcode.cn id=909 lang=javascript
 * @lcpr version=30100
 *
 * [909] 蛇梯棋
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
  
    const id2rc = (id, n) => {  
        const r = Math.floor((id - 1) / n); // 行号
        const x = n - 1 - r; // 行号转换成x坐标
        const y = (r % 2 !== 0) ? (id - 1) % n : n - 1 - (id - 1) % n; // 列号
        return [x, y];
    }




    const n = board.length;
    const vis = new Array(n * n + 1).fill(0);
    const queue = [[1, 0]];
    while (queue.length) {
        const p = queue.shift();
        
        for (let i = 1; i <= 6; ++i) {
            let nxt = p[0] + i;

            if (nxt > n * n) { // 超出边界
                break;
            }

            const rc = id2rc(nxt, n); // 得到下一步的行列
            

            if (board[rc[0]][rc[1]] > 0) { // 存在蛇或梯子
                nxt = board[rc[0]][rc[1]];
            }
            if (nxt === n * n) { // 到达终点
                return p[1] + 1;
            }
            if (!vis[nxt]) {
                vis[nxt] = true;
                queue.push([nxt, p[1] + 1]); // 扩展新状态
            }
        }
    }

    return -1;
    
};
// @lc code=end



/*
// @lcpr case=start
// [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]\n
// @lcpr case=end

// @lcpr case=start
// [[-1,-1],[-1,3]]\n
// @lcpr case=end

 */

