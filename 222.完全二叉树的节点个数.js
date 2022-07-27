/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {

    let l = root, r = root;

    let lH = 0, rH = 0;

    while(l !== null) {
        l = l.left;
        lH++;
    }

    while(r !== null) {
        r = r.right;
        rH++;
    }

    // lH 或 rH 至少为1
    if(lH == rH) {
        return Math.pow(2, lH) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end

