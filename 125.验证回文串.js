/*
 * @lc app=leetcode.cn id=125 lang=javascript
 * @lcpr version=30005
 *
 * [125] 验证回文串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;

};
// @lc code=end



/*
// @lcpr case=start
// "A man, a plan, a canal: Panama"\n
// @lcpr case=end

// @lcpr case=start
// "race a car"\n
// @lcpr case=end

// @lcpr case=start
// " "\n
// @lcpr case=end

 */

