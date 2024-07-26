/*
 * @Author: leo-me leo.me0602@gmail.com
 * @Date: 2024-05-26 14:22:35
 * @LastEditors: leo-me leo.me0602@gmail.com
 * @LastEditTime: 2024-05-26 14:47:47
 * @FilePath: /leetcode/116.填充每个节点的下一个右侧节点指针.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
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
    if (root === null) return null;

    const q = [];

    q.push(root);

    while (q.length) {
        const len = q.length;

        let pre = null;

        for(let i = 0; i < len; i++) {
            const cur = q.shift();

            if (pre !== null) {
                pre.next = cur;
            }

            pre = cur;

            if (cur.left) q.push(cur.left);

            if (cur.right) q.push(cur.right);
        }
    }

    return root;

};
// @lc code=end

