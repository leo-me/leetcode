/*
 * @lc app=leetcode.cn id=238 lang=javascript
 * @lcpr version=30100
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);
    let left = 1;
    let right = 1;

    for (let i = 0; i < n; i++) {
        res[i] *= left;
        left *= nums[i];
        
        res[n - 1 - i] *= right;
        right *= nums[n - 1 - i];
    }
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [-1,1,0,-3,3]\n
// @lcpr case=end

 */

