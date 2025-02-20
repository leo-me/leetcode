/*
 * @lc app=leetcode.cn id=76 lang=javascript
 * @lcpr version=30005
 *
 * [76] 最小覆盖子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left = 0, right = 0;
    let start = 0, minLen = Infinity;
    let window = {};
    let needs = {};
    for (let c of t) {
        needs[c] ? needs[c]++ : needs[c] = 1;
    }
    let match = 0;
    while (right < s.length) {
        let c1 = s[right];
        if (needs[c1]) {
            window[c1] ? window[c1]++ : window[c1] = 1;
            if (window[c1] === needs[c1]) {
                match++;
            }
        }
        right++;
        while (match === Object.keys(needs).length) {
            if (right - left < minLen) {
                start = left;
                minLen = right - left;
            }
            let c2 = s[left];
            if (needs[c2]) {
                window[c2]--;
                if (window[c2] < needs[c2]) {
                    match--;
                }
            }
            left++;
        }
    }
    return minLen === Infinity ? "" : s.substr(start, minLen);
};
// @lc code=end



/*
// @lcpr case=start
// "ADOBECODEBANC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"aa"\n
// @lcpr case=end

 */

