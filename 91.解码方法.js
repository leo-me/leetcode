/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length;
    const f = new Array(n + 1).fill(0); // 创建一个数组来存储解码方法的数量，初始值全部为0
    f[0] = 1; // 空字符串有一种解码方法，即什么都不解码
    for (let i = 1; i <= n; ++i) {
        if (s[i - 1] !== '0') { // 如果当前字符不是 '0'，则当前字符可以单独解码为一个字母
            f[i] += f[i - 1]; // 将之前的解码方法数量加到当前位置上
        }
        if (i > 1 && s[i - 2] != '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
            // 如果当前字符和前一个字符可以组成一个在 1 到 26 范围内的数字，则可以将这两个字符一起解码为一个字母
            f[i] += f[i - 2]; // 将两位的解码方法数量加到当前位置上
        }
    }
    return f[n]; // 返回解码到整个字符串的解码方法数量
};

// @lc code=end

