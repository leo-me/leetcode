/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    let res = [];
    nums.forEach((value, index) => map[value]= index);

    nums.find((v, curIdx) => {
        let need = target - v;
        if(map[need] && (map[need] !== curIdx)) {
            res.push(curIdx, map[need]);
            return true;
        }
    });

    return res;
};
// @lc code=end

