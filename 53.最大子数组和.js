/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let size = nums.length;
    if(size === 0) return 0;

    let dp = [];

    dp[0] = nums[0];

    for(let i = 1; i< size; i++) {
        // 动态规划，选还是不选，当前项 + 之前的项 或从当前项目重新开始计算
        dp[i] = Math.max(nums[i], nums[i] + dp[i-1]);
    }

    let res = -Infinity;

    for(let i =0; i< size; i++) {
        res = Math.max(res, dp[i]);
    }

    return res;

};
// @lc code=end

