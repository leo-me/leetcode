/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let valToIndex = new Map();

    for(let i =0; i < inorder.length; i++) {
        valToIndex.set(inorder[i], i);
    }

    var build = function(preorder, preStart, preEnd, inorder, inStart, inEnd) {
        if(preStart > preEnd) return null;

        let rootVal = preorder[preStart];

        let index = valToIndex.get(rootVal);

        let leftSize = index - inStart;

        let root = new TreeNode(rootVal);

        root.left = build(preorder, preStart +1, preStart+leftSize, inorder, inStart, index -1);

        root.right = build(preorder, preStart+leftSize+1, preEnd, inorder, index+1, inEnd);

        return root;
    }

    return build(preorder, 0, preorder.length - 1, inorder, 0, preorder.length - 1);
};


// @lc code=end

