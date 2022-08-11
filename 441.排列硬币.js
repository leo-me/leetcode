/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n <=1 ) return n;

    let sum = 1;
    let i = 1;

    while(sum <= n) {
        i++;
        sum += i;
    }

   return sum === n ? i : i - 1;
};
// @lc code=end

