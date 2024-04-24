/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  let n = s1.length;
  let m = s2.length;
  let t = s3.length;

  if (m+n !== t) return false;

  let f = new Array(m+1).fill(false);

  f[0] = true;


  for(let i = 0; i <=n; i++) {
    for(let j = 0; j <=m; j++) {
      let p = i+j -1;

      if (i > 0) {
        f[j] = f[j] && s1[i-1] === s3[p];
      }

      if (j > 0) {
        f[j] = f[j] || (f[j-1] && s2[j-1] === s3[p]);
      }
    }
  }

  return f[m];
};
// @lc code=end

