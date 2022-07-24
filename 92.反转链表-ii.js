/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // 后驱节点
    let successor = null;

    // 反转以head 为起点的n个节点，返回新的头节点
    function reverseN(head, n) {
        if(n === 1) {
            // 记录第n+1 个节点
            successor = head.next;
            return head;
        }

        let last = reverseN(head.next, n-1);
        head.next.next = head;
        head.next = successor;
        return last;
    }


    if(left === 1) {
        return reverseN(head, right);
    }

    head.next = reverseBetween(head.next, left -1, right -1);

    return head;

};
// @lc code=end

