/*
 * @lc app=leetcode.cn id=877 lang=javascript
 *
 * [877] 石子游戏
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    let len = piles.length;
    let dp = new Array(n).fill(0);

    for(let i =0; i< len; i++) {
        dp[i] = piles[i];
    }


};
// @lc code=end

