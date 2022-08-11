/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
    if(root === null) return 0;

    let queue = [];

    queue.push(root);
    let depth = 1;

    while(queue.length > 0) {
       let size = queue.length;
       for(let i = 0; i < size; i++) {
          let cur = queue.shift();
           // 到了最小深度的最底的节点
          if(cur.left === null && cur.right === null) {
            return depth;
          }

          if(cur.left !== null) {
            queue.push(cur.left);
          }
          if(cur.right !== null) {
            queue.push(cur.right);
          }
       }
        depth++;
    }
    // cheng第一次找到的就是最小深度
    return depth;

};
// @lc code=end

