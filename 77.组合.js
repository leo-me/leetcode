/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let nums = [];
    for(let i=1; i <=n; i++) {
        nums.push(i);
    }

    let res = [];
    let track = [];

    function backtrack(nums, start) {
        if(track.length === k) {
            res.push([...track]);
        }

        for(let i = start; i < nums.length; i++) {
            track.push(nums[i]);
            backtrack(nums, i+1);
            track.pop();
        }

    }
    backtrack(nums, 0);

    return res;
};
// @lc code=end

