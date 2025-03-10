/*
 * @lc app=leetcode.cn id=200 lang=javascript
 * @lcpr version=30100
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    // 1. DFS
    const dfs = (grid, r, c) => {
        if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') {
            return;
        }
        grid[r][c] = '0'; // 将相邻位置的1标记为0 代表已经访问过
        dfs(grid, r - 1, c);
        dfs(grid, r + 1, c);
        dfs(grid, r, c - 1);
        dfs(grid, r, c + 1);
    }

    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    return count;

    // 2. BFS
    // const rows = grid.length;
    // if (rows === 0) return 0;
    // const cols = grid[0].length;
    // let count = 0;

    // const bfs = (r, c) => {
    //     const queue = [[r, c]];
    //     while (queue.length) {
    //         const [row, col] = queue.shift();
    //         if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0') {
    //             continue;
    //         }
    //         grid[row][col] = '0';
    //         queue.push([row - 1, col]);
    //         queue.push([row + 1, col]);
    //         queue.push([row, col - 1]);
    //         queue.push([row, col + 1]);
    //     }
    // };

    // for (let i = 0; i < rows; i++) {
    //     for (let j = 0; j < cols; j++) {
    //         if (grid[i][j] === '1') {
    //             count++;
    //             bfs(i, j);
    //         }
    //     }
    // }

    // return count;


    
};
// @lc code=end



/*
// @lcpr case=start
// [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]\n
// @lcpr case=end

// @lcpr case=start
// [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]\n
// @lcpr case=end

 */

