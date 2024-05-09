/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (!head) return null;

  function findMid (start, end) {
    let slow = start, fast = start;

    while(fast!== end && fast.next !==end) {
      slow = slow.next,
      fast = fast.next.next;
    }

    return slow;
  };

  function buildBST (start, end) {
    if (start === end) return null;

    const mid = findMid(start, end);

    const root = new TreeNode(mid.val);

    root.left = buildBST(start, mid);

    root.right = buildBST(mid.next, end);

    return root;
  }

  const res = buildBST(head, null);
  console.log('res: ', res);

  return res;

};
// @lc code=end

