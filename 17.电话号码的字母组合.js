/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(digits.length === 0) return [];

  const strMapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz' ];
  let res = [];

  let temp = [];

  function backtrack(str, start, sb) {
    if(sb.length === digits.length) {
      res.push(sb.join(''));
      return;
    }

    for(let i = start; i < digits.length; i++) {
      let index = digits[i] - 0;
      for(let j in strMapping[index]) {
        sb.push(strMapping[index][j]);
        backtrack(str, i+1, sb);
        sb.pop();
      }
    }
  }

  backtrack(digits, 0, temp)

  return res;

};
// @lc code=end

