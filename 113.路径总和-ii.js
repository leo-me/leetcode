/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const res = [];

  function dfs (node, path, sum) {
    if (!node ) return;

    path.push(node.val);

    sum += node.val;
    
    if(!node.left && !node.right && sum === targetSum) {
      res.push([...path]);

    }

    dfs(node.left, path, sum);

    dfs(node.right, path, sum);

    path.pop(); // 回溯，将当前节点从路径中删除
  }

  dfs(root, [], 0);

  return res;

};
// @lc code=end

