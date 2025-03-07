/*
 * @lc app=leetcode.cn id=128 lang=javascript
 * @lcpr version=30005
 *
 * [128] 最长连续序列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let maxLen = 0;
    for (let num of numSet) {
       // the smallest number in the sequence
        if (!numSet.has(num - 1)) {
            let curNum = num;
            let curLen = 1;
            while (numSet.has(curNum + 1)) {
                curNum++;
                curLen++;
            }
            maxLen = Math.max(maxLen, curLen);
        }
    }
    return maxLen;
};
// @lc code=end



/*
// @lcpr case=start
// [100,4,200,1,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,3,7,2,5,8,4,6,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,2]\n
// @lcpr case=end

 */

