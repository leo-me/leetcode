/*
 * @lc app=leetcode.cn id=152 lang=javascript
 * @lcpr version=30100
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const n = nums.length;
    
    let max = -Infinity, imax = 1, imin = 1;

    for (let i = 0; i < n; i++) {
        if (nums[i] < 0) {
            [imax, imin] = [imin, imax];
        }

        imax = Math.max(imax * nums[i], nums[i]);

        imin = Math.min(imin * nums[i], nums[i]);

        max = Math.max(max, imax);
    }

    return max;
    
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,-2,4]\n
// @lcpr case=end

// @lcpr case=start
// [-2,0,-1]\n
// @lcpr case=end

 */

