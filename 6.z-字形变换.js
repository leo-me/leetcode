/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows < 2) return s;
  const res = new Array(numRows).fill('');
  let i = 0, flag = -1;

  for(let char in s ) {
    res[i] += s[char];
    if(i === 0 || i === numRows -1 ) flag = -flag;
    i = i + flag;
  }


  return res.join('');

};
// @lc code=end

