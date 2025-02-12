/*
 * @lc app=leetcode.cn id=13 lang=javascript
 * @lcpr version=30005
 *
 * [13] 罗马数字转整数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    
    let ans = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        const value = romanMap.get(s[i]);
        if (i < n - 1 && value < romanMap.get(s[i + 1])) {
            ans -= value;
        } else {
            ans += value;
        }
    }
    return ans;

};
// @lc code=end



/*
// @lcpr case=start
// "III"\n
// @lcpr case=end

// @lcpr case=start
// "IV"\n
// @lcpr case=end

// @lcpr case=start
// "IX"\n
// @lcpr case=end

// @lcpr case=start
// "LVIII"\n
// @lcpr case=end

// @lcpr case=start
// "MCMXCIV"\n
// @lcpr case=end

 */

