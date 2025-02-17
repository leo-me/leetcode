/*
 * @lc app=leetcode.cn id=25 lang=javascript
 * @lcpr version=30005
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // reverse the elements in the interval [a, b), note that it is left-closed and right-open
    function reverse(a, b) {
      let pre, cur, nxt;
      pre = null;
      cur = a;
      nxt = a;
      // just change the termination condition of the while loop
      while (cur !== b) {
          nxt = cur.next;
          cur.next = pre;
          pre = cur;
          cur = nxt;
      }
      // return the head node of the reversed list
      return pre;
    }


    let a = head, b = head; 

    for (let i = 0; i < k; i++) {
      // less than k elements, no need to reverse, base case
      if (b == null) return head;
      b = b.next;
  }
    let newHead = reverse(a, b);

    a.next = reverseKGroup(b, k);

    return newHead;

};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n3\n
// @lcpr case=end

 */

