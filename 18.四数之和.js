/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode.cn/problems/4sum/description/
 *
 * algorithms
 * Medium (38.71%)
 * Likes:    1299
 * Dislikes: 0
 * Total Accepted:    343.5K
 * Total Submissions: 887.4K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 *
 *
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 *
 * 你可以按 任意顺序 返回答案 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let sortArr = nums.sort((a,b) => a - b);
    return nSum(sortArr, 4, 0, target);
};

var nSum = function(nums, n, start, target) {
    let sz = nums.length;
    let res = [];
    if( n < 2 || sz < n) return res;


    if(n === 2) {
        let low = start, high = sz - 1;
        while(low < high) {
            let left = nums[low], right = nums[high];

            if(left + right < target) {
                while(low < high && nums[low] === left) low++;
            } else if (left + right > target) {
                while(low < high && nums[high] === right) high --;
            } else {
                res.push([left, right]);
                // 当前项 且 如果下一项相同的话
                while(low < high && nums[low] === left) low++;
                while(low < high && nums[low] === right) high --;
            }
        }
    } else {
        // n > 2
        for(let i = start; i < sz; i++) {
            let sub = nSum(nums, n-1, i+1, target - nums[i]);

            if(sub.length) {
                sub.forEach(s => res.push([...s, nums[i]]));
            }
            // 忽略重复项
            while(i < sz -1 && nums[i+ 1] === nums[i]) i++;
        }

    }

    return res;
}
// @lc code=end

