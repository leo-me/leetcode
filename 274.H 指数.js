/*
 * @lc app=leetcode.cn id=274 lang=javascript
 * @lcpr version=30100
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);

    let h = 0, i = citations.length - 1;
    
    while (i >= 0 && citations[i] > h) {
        h++;
        i--;
    }
    return h;
    
};
// @lc code=end



/*
// @lcpr case=start
// [3,0,6,1,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,1]\n
// @lcpr case=end

 */

