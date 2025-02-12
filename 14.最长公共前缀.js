/*
 * @lc app=leetcode.cn id=14 lang=javascript
 * @lcpr version=30005
 *
 * [14] 最长公共前缀
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    if(strs.length === 1) return strs[0];
    
    let res = '';
    
    for(let i = 0; i < strs[0].length; i++) {
      for(let j = 1; j < strs.length; j++) {
        if(strs[j][i] !== strs[0][i]) {
          return res;
        } else if(j === strs.length - 1) {
          res += strs[0][i];
        }
      }
    }
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// ["flower","flow","flight"]\n
// @lcpr case=end

// @lcpr case=start
// ["dog","racecar","car"]\n
// @lcpr case=end

 */

