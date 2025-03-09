/*
 * @lc app=leetcode.cn id=169 lang=javascript
 * @lcpr version=30005
 *
 * [169] 多数元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 1. 摩尔投票法
    let count = 0;
    let candidate = null;

    for(let i = 0; i < nums.length; i++) {
        if(count === 0) {
            candidate = nums[i];
        }
        count += candidate === nums[i] ? 1 : -1;
    }

    return candidate;

    // 2. 排序
    // nums.sort((a, b) => a - b);
    // return nums[Math.floor(nums.length / 2)];

};
// @lc code=end



/*
// @lcpr case=start
// [3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,1,1,1,2,2]\n
// @lcpr case=end

 */

