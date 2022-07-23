/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = [];
    let sortArr = intervals.sort((a,b) => a[0] - b[0]);

    res.push(sortArr[0]);

    for(let i = 1; i < intervals.length; i++) {
        let cur = sortArr[i];
        let last = res[res.length -1];

        if(cur[0] <= last[1]) {
            last[1] = Math.max(last[1], cur[1]);
        } else {
            res.push(cur);
        }
    }
    return res;

};
// @lc code=end

