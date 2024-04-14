/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let n = nums.length;

  let max = 0;

  for(let i = 0; i < n- 1; i++) {
    max = Math.max(max, i+nums[i]);

    if (max <= i) {
      return false;
    }
  }

  return max >= n -1 ;

};
// @lc code=end

