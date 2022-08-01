/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {

    function build(pre, preStart, preEnd, post, postStart, postEnd) {
        if(preStart > preEnd) return null;

        if(preStart === preEnd) {
            return new TreeNode(pre[preStart]);
        }

        let rootVal = pre[preStart];
        let leftRootVal = pre[preStart+1];

        let index = map.get(leftRootVal);

        let leftSize = index - postStart +1;

        let root = new TreeNode(rootVal);

        root.left = build(pre, preStart+1, preStart+leftSize, post, postStart, index);

        root.right = build(pre, preStart+ leftSize +1, preEnd, post, index+1, postEnd -1);

        return root;
    }

    let map = new Map();

    for(let i =0; i < postorder.length; i++) {
        map.set(postorder[i], i);
    }

    return build(preorder, 0, preorder.length -1, postorder, 0, postorder.length -1);
};
// @lc code=end

