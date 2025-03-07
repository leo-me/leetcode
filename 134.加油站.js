/*
 * @lc app=leetcode.cn id=134 lang=javascript
 * @lcpr version=30005
 *
 * [134] 加油站
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let n = gas.length;
    let total_tank = 0;
    let curr_tank = 0;
    let starting_station = 0;
    for (let i = 0; i < n; i++) {
        total_tank += gas[i] - cost[i];
        curr_tank += gas[i] - cost[i];
        if (curr_tank < 0) {
            starting_station = i + 1;
            curr_tank = 0;
        }
    }
    return total_tank >= 0 ? starting_station : -1;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n[3,4,5,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4]\n[3,4,3]\n
// @lcpr case=end

 */

