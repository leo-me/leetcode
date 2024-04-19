/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let slow = 0, fast =0;

  let count = 0;

  while(fast< nums.length) {

    if (nums[fast] != nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    } else if (slow < fast && count < 2) {
      slow++;
      nums[slow]= nums[fast];
    }

    fast++;
    count++;

    if(fast < nums.length && nums[fast] !== nums[fast - 1]) {
      count = 0;
    }
  }

  return slow + 1;


};
// @lc code=end

