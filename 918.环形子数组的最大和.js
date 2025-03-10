/*
 * @lc app=leetcode.cn id=918 lang=javascript
 * @lcpr version=30100
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let sum = 0;
    let maxSum = -Infinity;
    let minSum = Infinity;
    let curMax = 0;
    let curMin = 0;

    for (const num of nums) {
        curMax = Math.max(curMax + num, num);
        maxSum = Math.max(maxSum, curMax);

        curMin = Math.min(curMin + num, num);
        minSum = Math.min(minSum, curMin);

        sum += num;
    }

    return maxSum > 0 ? Math.max(maxSum, sum - minSum) : maxSum;
    
};
// @lc code=end



/*
// @lcpr case=start
// [1,-2,3,-2]\n
// @lcpr case=end

// @lcpr case=start
// [5,-3,5]\n
// @lcpr case=end

// @lcpr case=start
// [3,-2,2,-3]\n
// @lcpr case=end

 */

