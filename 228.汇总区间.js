/*
 * @lc app=leetcode.cn id=228 lang=javascript
 * @lcpr version=30100
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = [];
    let i = 0;

    while (i < nums.length) {
        let low = i;
        i++;

        while (i < nums.length && nums[i] === nums[i - 1] + 1) {
            i++;
        }

        let high = i - 1;
        
        if (low < high) {
            res.push(`${nums[low]}->${nums[high]}`);
        } else {
            res.push(`${nums[low]}`);
        }
    }
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [0,1,2,4,5,7]\n
// @lcpr case=end

// @lcpr case=start
// [0,2,3,4,6,8,9]\n
// @lcpr case=end

 */

