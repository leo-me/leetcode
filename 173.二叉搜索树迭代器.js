/*
 * @lc app=leetcode.cn id=173 lang=javascript
 * @lcpr version=30100
 *
 * [173] 二叉搜索树迭代器
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
 */
var BSTIterator = function(root) {
  this.nodes = []; // 存储中序遍历的结果
  this.index = 0; // 当前指针
  this._inorder(root); // 中序遍历
};

BSTIterator.prototype._inorder = function(root) {
  if (!root) return;
  this._inorder(root.left); // 遍历左子树
  this.nodes.push(root.val); // 存储当前节点值
  this._inorder(root.right); // 遍历右子树
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.nodes[this.index++]; // 返回下一个元素

};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.index < this.nodes.length; // 检查是否还有元素
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end



