/*
 * @lc app=leetcode.cn id=637 lang=javascript
 * @lcpr version=30100
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const res = [];
    const queue = [root];

    while (queue.length) {
        let sum = 0;
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            sum += node.val;

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        res.push(sum / size);
    }

    return res;
    
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [3,9,20,15,7]\n
// @lcpr case=end

 */

