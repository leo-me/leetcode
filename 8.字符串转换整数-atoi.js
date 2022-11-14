/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let res = 0;
  let i = 0;
  let flag = 1;
  const max =  Math.pow(2, 31) -1;
  const min = - Math.pow(2, 31);

  while(s[i] === ' ') i++;

  if(s[i] === '-') flag = -1;

  if(s[i] === '-' || s[i] === '+') i++;

  while(i < s.length && /^\d{1}$/.test(s[i])) {
    let num = s[i] - 0;
    res = res*10 + num;

    if(res > max) {
      return flag > 0 ? max : min;
    }

    i++;
  }

  return flag > 0 ? res : -res;

};
// @lc code=end

