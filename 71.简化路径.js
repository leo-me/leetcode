/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let parts = path.split('/');

    let stk = [];

    for(let i= 0; i < parts.length; i++ ) {
        let part = parts[i];

        if (part === '' || part === '.') continue;

        if (part === '..') {
            if(stk.length !== 0) stk.pop();

            continue;
        }

        stk.push(part);
    }

    let res = '';
    while(stk.length !== 0) {
        res = '/' + stk.pop() + res;
    }

    return res === '' ? '/' : res;
};
// @lc code=end

