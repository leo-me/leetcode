/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  // 快慢指针
  if (!head || !head.next) {
    return head;
  }

  let dummy = new ListNode(0);

  dummy.next = head;

  let slow = dummy;
  let fast = head;

  while(fast && fast.next) {
    if (fast.val === fast.next.val) {
      let duplicate = fast.val;

      while(fast && fast.val === duplicate) { // 循环跳过所有重复节点
        fast = fast.next;
      }
      slow.next = fast;  // 更新前一个节点的 next 指针
    } else {
      slow = fast;
      fast = fast.next;
    }
  }

  return dummy.next;

};
// @lc code=end

