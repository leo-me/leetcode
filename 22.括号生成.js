/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) return [];

  let res = [];
  let track = [];

  function backtrack(left, right, track, res) {
    if(right < left) return;

    if(left < 0 || right < 0) return;

    if(left === 0 && right === 0) {
      res.push(track.join(''));
      return;
    }

    track.push('(');
    backtrack(left -1, right, track, res);
    track.pop();


    track.push(')');
    backtrack(left, right -1, track, res);
    track.pop();
  }

  backtrack(n, n, track, res);

  return res;

};
// @lc code=end

