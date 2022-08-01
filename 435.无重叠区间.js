/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    function intervalsSchedule(intvs) {
        if(intvs.length === 0) return 0;

        intvs.sort((a,b) => a[1] - b[1]);

        // 至少有一个区间不相交
        let count = 1;

        let lastEnd = intvs[0][1];

        for(let i =1; i<intvs.length; i++) {
            let start = intvs[i][0];

            if(start >= lastEnd) {
                count++;
                lastEnd = intvs[i][1];
            }
        }
        return count;
    }

    let n = intervals.length;

    return n - intervalsSchedule(intervals);


};
// @lc code=end

