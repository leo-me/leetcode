/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {


    function build(low, high) {
        let res = [];

        if(low > high) {
            res.push(null);
            return res;
        }

        // 1、穷举 root 节点的所有可能。
        for(let i = low; i<= high; i++) {
            // 2、递归构造出左右子树的所有合法 BST。
            let leftTree = build(low, i -1);
            let rightTree = build(i+1, high);
            // 3、给 root 节点穷举所有左右子树的组合。
            for(let left of leftTree) {
                for(let right of rightTree) {
                    // i 作为根节点 root 的值
                    let node = new TreeNode(i, left, right);
                    res.push(node);
                }
            }
        }
        return res;
    }


    if (n == 0) return new LinkedList();
    // 构造闭区间 [1, n] 组成的 BST
    return build(1, n);
};
// @lc code=end

