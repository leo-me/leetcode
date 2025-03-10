/*
 * @lc app=leetcode.cn id=209 lang=javascript
 * @lcpr version=30100
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let min = Infinity;

    while (right < nums.length) {
        sum += nums[right];
        right++;

        while (sum >= target) {
            min = Math.min(min, right - left);
            sum -= nums[left];
            left++;
        }
    }

    return min === Infinity ? 0 : min;
};
// @lc code=end



/*
// @lcpr case=start
// 7\n[2,3,1,2,4,3]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[1,4,4]\n
// @lcpr case=end

// @lcpr case=start
// 11\n[1,1,1,1,1,1,1,1]\n
// @lcpr case=end

 */

