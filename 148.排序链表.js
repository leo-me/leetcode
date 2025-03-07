/*
 * @lc app=leetcode.cn id=148 lang=javascript
 * @lcpr version=30005
 *
 * [148] 排序链表
 */


// @lcpr-template-start

// @lcpr-template-end
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
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head;

    let slow = head;
    let fast = head;
    let pre = null;
    while (fast && fast.next) {
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    pre.next = null;
    return merge(sortList(head), sortList(slow)); 

    function merge(l1, l2) {                        
        let dummy = new ListNode();
        let cur = dummy;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                cur.next = l1;
                l1 = l1.next;
            } else {
                cur.next = l2;
                l2 = l2.next;
            }
            cur = cur.next;
        }
        if (l1) cur.next = l1;
        if (l2) cur.next = l2;
        return dummy.next;
    } 
    
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1,5,3,4,0]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

