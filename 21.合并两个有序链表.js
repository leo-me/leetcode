/*
 * @Author: leo-me leo.me0602@gmail.com
 * @Date: 2022-07-20 20:24:16
 * @LastEditors: leo-me leo.me0602@gmail.com
 * @LastEditTime: 2022-07-20 20:35:10
 * @FilePath: /leetcode/21.合并两个有序链表.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let node = new ListNode();
    let dummy = node;
    while(list1 && list2) {
        if(list1.val >= list2.val) {
            node.next = list2
            list2 = list2.next;
        } else {
            node.next = list1;
            list1 = list1.next;
        }
        node = node.next;
    }

    if(list1) {
        node.next = list1;
    }

    if(list2) {
        node.next = list2;
    }

    return dummy.next;
};
// @lc code=end

