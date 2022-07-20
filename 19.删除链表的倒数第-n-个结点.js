/*
 * @Author: leo-me leo.me0602@gmail.com
 * @Date: 2022-07-20 19:28:16
 * @LastEditors: leo-me leo.me0602@gmail.com
 * @LastEditTime: 2022-07-20 20:03:17
 * @FilePath: /leetcode/19.删除链表的倒数第-n-个结点.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (44.35%)
 * Likes:    2135
 * Dislikes: 0
 * Total Accepted:    855.8K
 * Total Submissions: 1.9M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1], n = 1
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中结点的数目为 sz
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 *
 *
 *
 * 进阶：你能尝试使用一趟扫描实现吗？
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 双指针 p1 先走k步， p1 、p2 一起走 n-k 步，p2 当前节点即为倒数第k个节点
    // 一个dummy 节点指向 头节点
    let dummy = new ListNode(0, head);
    let p1 = p2 = dummy;
    while(n--) {
        p1 = p1.next;
    }

    while(p1.next !== null) {
        p1 = p1.next;
        p2 = p2.next
    }

    p2.next = p2.next.next;

    return dummy.next;

};
// @lc code=end

