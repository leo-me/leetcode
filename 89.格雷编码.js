/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
 // 初始化一个数组来存储生成的格雷码，从0开始。
 const ret = [0];

 // 从1到n遍历每个比特位。
 for (let i = 1; i <= n; i++) {
     // 获取当前ret数组的长度。
     const m = ret.length;

     // 逆向遍历ret数组。
     for (let j = m - 1; j >= 0; j--) {
         // 通过将当前码和左移(i - 1)位的1进行按位或操作，
         // 生成一个新的格雷码。这个操作会翻转当前码的第i位。
         ret.push(ret[j] | (1 << (i - 1)));
     }
 }

 // 返回包含所有生成的格雷码的数组。
 return ret;
};
// @lc code=end

