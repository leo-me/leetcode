/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {

    function build(nums, low, high) {
        let max = -Infinity;
        let idx = -1;

        if(low > high) {
            return null;
        }

        for(let i = low; i<= high; i++) {
            if(nums[i] > max) {
                max = nums[i];
                idx = i;
            }
        }

        let root = new TreeNode(max);

        root.left = build(nums, low, idx-1);
        root.right= build(nums, idx+1, high);
        return root;
    }

    return build(nums, 0, nums.length-1);

};
// @lc code=end

