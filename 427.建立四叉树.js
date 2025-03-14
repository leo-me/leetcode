/*
 * @lc app=leetcode.cn id=427 lang=javascript
 * @lcpr version=30100
 *
 * [427] 建立四叉树
 */

// @lc code=start
/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
    const dfs = (x, y, n) => {
        if (n === 1) {
            return new _Node(grid[x][y] === 1, true, null, null, null, null);
        }
        const topLeft = dfs(x, y, n / 2);
        const topRight = dfs(x, y + n / 2, n / 2);
        const bottomLeft = dfs(x + n / 2, y, n / 2);
        const bottomRight = dfs(x + n / 2, y + n / 2, n / 2);
        
        if (topLeft.isLeaf 
          && topRight.isLeaf
          && bottomLeft.isLeaf 
          && bottomRight.isLeaf 
          && topLeft.val === topRight.val 
          && topRight.val === bottomLeft.val 
          && bottomLeft.val === bottomRight.val) {
            return new _Node(topLeft.val, true, null, null, null, null);
        } else {
            return new _Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
        }
    }

    return dfs(0, 0, grid.length);
    
};
// @lc code=end



/*
// @lcpr case=start
// [[0,1],[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]\n
// @lcpr case=end

 */

