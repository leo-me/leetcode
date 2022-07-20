/*
 * @Author: leo-me leo.me0602@gmail.com
 * @Date: 2022-07-20 20:50:59
 * @LastEditors: leo-me leo.me0602@gmail.com
 * @LastEditTime: 2022-07-20 20:58:12
 * @FilePath: /leetcode/27.移除元素.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let slow = 0, fast =0;
    while(fast < nums.length) {
        if(nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};
// @lc code=end

