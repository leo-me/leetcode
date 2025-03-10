/*
 * @lc app=leetcode.cn id=530 lang=javascript
 * @lcpr version=30100
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let pre = -1;
    let res = Infinity;

    const dfs = (node) => {
        if (!node) {
            return;
        }

        dfs(node.left);

        if (pre !== -1) {
            res = Math.min(res, node.val - pre);
        }
        
        pre = node.val;

        dfs(node.right);
    }

    dfs(root);

    return res;
    
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,6,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,48,null,null,12,49]\n
// @lcpr case=end

 */

