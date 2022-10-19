/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = x;
  if (x < 0 ) {
    res = -x;
  }

  res = res.toString();
  console.log('res: ', res, typeof res);

  res = res.split('').reverse();

  res = res.join('');

  res = + res;

  if( res >= Math.pow(2, 31) - 1  || res <=  -Math.pow(2, 31)) {
    return 0
  }


  if(x < 0 ) {
    return -res;
  }

  return res;
};
// @lc code=end

