/*
 * @lc app=leetcode.cn id=137 lang=javascript
 * @lcpr version=30005
 *
 * [137] 只出现一次的数字 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();

    for (let i = 0;  i < nums.length; i++) {
      map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
  
    for(const [val, key] of map){
      if (key === 1) {
        return val;
      }
    }

    return 0;
};
// @lc code=end



/*
// @lcpr case=start
// [2,2,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,1,0,1,99]\n
// @lcpr case=end

 */

