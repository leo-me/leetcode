/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let queue = [];
    let res  = [];

    if (root === null) return res;

    let start = root;
    while(start) {

        res.push(start.val);

        if(start.left) {
            queue.push(start.left);
        }

        if (queue.right) {
            queue.push(queue.right)
        } else {
            queue.push(null);
        }

        start = queue.shift();
    }


};
// @lc code=end

