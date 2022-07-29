/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 * https://leetcode.cn/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (44.82%)
 * Likes:    995
 * Dislikes: 0
 * Total Accepted:    244.1K
 * Total Submissions: 544.7K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 *
 * 示例 2:
 *
 *
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= num1.length, num2.length <= 200
 * num1 和 num2 只能由数字组成。
 * num1 和 num2 都不包含任何前导零，除了数字0本身。
 *
 *
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

    // return Number(num1)*Number(num2) + '';
    let m = num1.length, n = num2.length;
    let res = new Array(m+n).fill(0);

    for(let i = m -1; i >=0; i--) {
        for(let j = n-1; j>=0; j--) {
            let mul = Number(num1[i])* Number(num2[j]);

            let p1 = i+j, p2 =i+j+1;

            let sum = mul + res[p2];

            res[p2] = sum % 10;
            res[p1] =  res[p1] + Math.floor(sum / 10);
        }
    }
    let i = 0;
    // 去掉开头的0
    while(i < res.length && res[i] === 0 ) {
        res.shift();
    }

    return res.length  === 0 ? '0' : res.join('');
};
// @lc code=end

