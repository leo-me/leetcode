/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode.cn/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (45.58%)
 * Likes:    1213
 * Dislikes: 0
 * Total Accepted:    387.1K
 * Total Submissions: 849.4K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 *
 * 返回这三个数的和。
 *
 * 假定每组输入只存在恰好一个解。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,0,0], target = 1
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    function twoSumClosest(nums, start, target) {
        let low = start, high = nums.length -1;
        let delata = Infinity;

        while(low < high) {
            let sum = nums[low] + nums[high];

            if(Math.abs(delata) > Math.abs(target - sum)) {
                delata = target - sum;
            }

            if(sum < target) {
                low++;
            } else {
                high--;
            }
        }

        return target - delata;
    }

    if(nums.length < 3) return 0;

    nums = nums.sort((a,b) => a-b);

    // 记录三数之和与目标值的偏差
    let delta = Infinity;

    for(let i = 0; i < nums.length; i++) {
        let sum = nums[i] + twoSumClosest(nums, i+1, target - nums[i]);

        if(Math.abs(delta) > Math.abs(target -sum)) {
            delta = target - sum;
        }
    }

    return target - delta;
};
// @lc code=end

