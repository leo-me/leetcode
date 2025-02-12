/*
 * @lc app=leetcode.cn id=23 lang=javascript
 * @lcpr version=30005
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists.length) return null;
    if(lists.length === 1) return lists[0];
    
    let res = new ListNode();
    let cur = res;
    let arr = [];
    
    for(let i = 0; i < lists.length; i++) {
        let node = lists[i];
        while(node) {
            arr.push(node.val);
            node = node.next;
        }
    }
    
    arr.sort((a, b) => a - b);
    
    for(let i = 0; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    
    return res.next;
};
// @lc code=end



/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */

