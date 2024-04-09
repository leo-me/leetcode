/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let dp;

  function kmp(pat) {

    let M = pat.length;
    dp = new Array(M).fill(0).map(() => new Array(256).fill(0));

    dp[0][pat.charCodeAt(0)] = 1;

    let x = 0;

    for(let j = 1; j < M; j++) {
      for(let c = 0; c < 256; c++) {
        dp[j][c] = dp[x][c];
      }
      dp[j][pat[j].charCodeAt()] = j+1;

      x = dp[x][pat.charCodeAt(j)];
    }
  }

  kmp(needle);

  function search(txt) {
    let M = needle.length;
    let n = txt.length;

    let j = 0;
    for(let i =0; i < n; i++) {
      j = dp[j][txt.charCodeAt(i)];

      if(j === M) return i - M +1;
    }

    return -1;
  }



  return search(haystack);

};
// @lc code=end

const res = strStr('sadbutsad', 'sad');
console.log('res: ', res);
// return res;
