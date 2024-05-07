/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
    let res = [];

    if (root === null) return res;

    let q = [];
    q.push(root);

    let flag = true;

    while(q.length > 0) {

        let len = q.length;
        let level = [];


        for(let i = 0; i< len; i++) {
            let cur = q.shift();


            if (flag) {
                level.push(cur.val);
            } else {
                level.unshift(cur.val);
            }

            if (cur.left !==null) q.push(cur.left);

            if (cur.right !== null) q.push(cur.right);


        }

        // 切换方向
        flag = !flag;

        res.push(level);
    }

    return res;

};
// @lc code=end

