/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let memo = new Map();
    let res = [];


    function travere(root) {

        if(root === null) {
            return "#";
        }

        let left = travere(root.left);
        let right = travere(root.right);

        let subTree = left + ',' + right + ',' + root.val;

        let freq = memo.get(subTree) || 0;

        if(freq === 1) {
            res.push(root);
        }

        memo.set(subTree, freq+1);

        return subTree;
    }
    travere(root);

    return res;
};
// @lc code=end

