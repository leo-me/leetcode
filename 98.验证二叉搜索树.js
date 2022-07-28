/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    /* 限定以 root 为根的子树节点必须满足 max.val > root.val > min.val */
    function isValid(root, min, max) {
        if(root === null) return true;

        if(min !== null && root.val <= min.val) return false;
        if(max !== null && root.val >= max.val) return false;

        // 限定左子树的最大值是 root.val，右子树的最小值是 root.val
        return isValid(root.left, min, root) && isValid(root.right, root, max);
    }

    return isValid(root, null, null);
};
// @lc code=end

