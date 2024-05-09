/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} postorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inOrder, postorder) {
  let valToIndex = new Map();

    for(let i =0; i < inOrder.length; i++) {
        valToIndex.set(inOrder[i], i);
    }

    var build = function(inOrder, inStart, inEnd, postorder, postStart, postEnd) {
        if(inStart > inEnd) return null;

        let rootVal = postorder[postEnd];

        let index = valToIndex.get(rootVal);

        let leftSize = index - inStart;

        let root = new TreeNode(rootVal);

        root.left = build(inOrder, inStart, index -1 , postorder, postStart, postStart + leftSize -1);

        root.right = build(inOrder, index+1, inEnd, postorder, postStart + leftSize, postEnd - 1);

        return root;
    }

    

    return build(inOrder, 0, inOrder.length - 1, postorder, 0, postorder.length - 1);



};
// @lc code=end

