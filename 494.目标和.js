/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let res = 0;

    function backtrack(nums, i, left) {
        if(i === nums.length) {
            if(left === 0) {
                res++;
            }
            return;
        }

        // 选择 - 号
        left = left + nums[i];
        backtrack(nums, i+1, left);
        left = left - nums[i];


        // 选择 + 号
        left = left - nums[i];
        backtrack(nums, i+1, left);

        left = left + nums[i];
    }

    backtrack(nums, 0, target);

    return res;

};
// @lc code=end

