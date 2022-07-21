/*
 * @Author: leo-me leo.me0602@gmail.com
 * @Date: 2022-07-22 00:04:36
 * @LastEditors: leo-me leo.me0602@gmail.com
 * @LastEditTime: 2022-07-22 00:12:41
 * @FilePath: /leetcode/204.计数质数.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let isPrime = new Array(n).fill(true);

    for(let i=2; i*i<n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }

    }

    let count = 0;
    for (let i = 2; i < n; i++)
        if (isPrime[i]) count++;

    return count;

};
// @lc code=end

