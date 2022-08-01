/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let memo = new Array(nums.length).fill(-1);

    function dp(nums, start) {
        if(start >= nums.length) {
            return 0;
        }

        if(memo[start] !== -1) return memo[start];

        let res = Math.max(dp(nums, start+1), nums[start] + dp(nums, start+2));

        memo[start] = res;

        return res;
    }

    return dp(nums, 0);

};
// @lc code=end

