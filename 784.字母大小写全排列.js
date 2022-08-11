/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let res = [];
    let used = [];
    let track= [];


    function traverse(s, start) {
        if(track.length === s.length) {
            res.push([...track].join(''));
        }

        for(let i= start; i < s.length; i++) {

            track.push(s[i]);

            traverse(s, i+1);

            track.push(s[i].toUpperCase());

            traverse(s, i+1);
        }
    }

    traverse(s, 0);

    console.log('res', res);
    return res;





};
// @lc code=end

