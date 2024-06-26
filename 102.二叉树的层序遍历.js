/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];

    if (root === null) return res;

    let q = [];

    q.push(root);

    while(q.length) {
        let len = q.length;

        let level = [];

        for (let i=0 ; i <len; i++) {
            let cur = q.shift();

            level.push(cur.val);

            if(cur.left !== null) q.push(cur.left);

            if(cur.right !== null) q.push(cur.right);

        }

        res.push(level);
    }

    return res;
};
// @lc code=end

