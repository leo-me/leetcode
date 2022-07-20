/*
 * @Author: leo-me leo.me0602@gmail.com
 * @Date: 2022-07-20 20:04:19
 * @LastEditors: leo-me leo.me0602@gmail.com
 * @LastEditTime: 2022-07-20 20:24:05
 * @FilePath: /leetcode/20.有效的括号.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let left = [];
    let strArr = s.split('');

    let findNotMatch = strArr.find(s => {
        if(['(', '{', '['].includes(s)) {
            left.push(s);
        } else if(left.length > 0 && (leftOf(s) === left[left.length-1])) {
            console.log('left: ', left);
            left.pop();
        } else {
            // 不匹配
            return true;
        }
    });

    return left.length === 0 && !findNotMatch ;

};
var leftOf = function(c) {
    if (c == '}') return '{';
    if (c == ')') return '(';
    return '[';
}
// @lc code=end

