/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let dummy1 = new ListNode();
    let dummy2 = new ListNode();
    let p1 = dummy1, p2 = dummy2;
    let p = head;

    while(p !== null) {
        if(p.val < x) {
            p1.next = p;
            p1 = p1.next;
        } else {
            p2.next = p;
            p2 = p2.next;
        }
        // 断开原列表的节点的next指针
        let temp = p.next;
        p.next = null;
        p = temp;
    }

    // 连接两个列表
    p1.next = dummy2.next;

    return dummy1.next;


};
// @lc code=end

