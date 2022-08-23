/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 字符串编码
    function encode(str) {
        let count = new Array(26).fill(0);

        for(let c in str) {
            let delta = str[c].charCodeAt() - 'a'.charCodeAt();
            count[delta]++;
        }
        return count.join('');
    }

    let map = {};

    for(let i = 0; i < strs.length; i++) {
        let code = encode(strs[i]);
        if(map[code]) {
            map[code].push(strs[i]);
        } else {
            map[code] = [strs[i]];
        }
    }

    return Object.values(map);

};
// @lc code=end

