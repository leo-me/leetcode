/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    let track = [];

    let sortArr = nums.sort((a, b) => a-b);

    function backtrack(nums, start) {
        res.push([...track]);

        for(let i = start; i < nums.length; i++) {
            if(i>start && nums[i] === nums[i-1]) {
                continue;
            }

            track.push(nums[i]);
            backtrack(nums, i+1);
            track.pop();
        }
    }

    backtrack(sortArr, 0);

    return res;

};
// @lc code=end

