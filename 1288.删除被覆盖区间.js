/*
 * @lc app=leetcode.cn id=1288 lang=javascript
 *
 * [1288] 删除被覆盖区间
 *
 * https://leetcode.cn/problems/remove-covered-intervals/description/
 *
 * algorithms
 * Medium (56.06%)
 * Likes:    81
 * Dislikes: 0
 * Total Accepted:    21.3K
 * Total Submissions: 38K
 * Testcase Example:  '[[1,4],[3,6],[2,8]]'
 *
 * 给你一个区间列表，请你删除列表中被其他区间所覆盖的区间。
 *
 * 只有当 c <= a 且 b <= d 时，我们才认为区间 [a,b) 被区间 [c,d) 覆盖。
 *
 * 在完成所有删除操作后，请你返回列表中剩余区间的数目。
 *
 *
 *
 * 示例：
 *
 *
 * 输入：intervals = [[1,4],[3,6],[2,8]]
 * 输出：2
 * 解释：区间 [3,6] 被区间 [2,8] 覆盖，所以它被删除了。
 *
 *
 *
 *
 * 提示：​​​​​​
 *
 *
 * 1 <= intervals.length <= 1000
 * 0 <= intervals[i][0] < intervals[i][1] <= 10^5
 * 对于所有的 i != j：intervals[i] != intervals[j]
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    let sortArr = intervals.sort((a,b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });

    // 相交区间
    let res = 0;
    let left = sortArr[0][0];
    let right = sortArr[0][1];

    for(let i = 1; i < sortArr.length; i++) {
        let cur = sortArr[i];

        // 相交
        if(left <= cur[0] && right>= cur[1]) {
            res ++;
        }

        if(right >= cur[0] && right <= cur[1]) {
            right = cur[1];
        }

        if(right < cur[0]) {
            left = cur[0];
            right = cur[1];
        }

    }

    return intervals.length - res;

};
// @lc code=end

