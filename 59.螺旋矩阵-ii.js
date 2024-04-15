/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {

  if (n === 1) return [[1]];

  let up_bound = 0, low_bound = n -1;

  let left_bound = 0, right_bound = n - 1;

  let res = new Array(n).fill([]).map(() => new Array(n).fill(0));
  

  let cur = 0;

  while (cur < n**2) {
    if ( up_bound <= low_bound) {
      for(let i = left_bound; i <= right_bound;i++) {
        res[up_bound][i] = ++cur;
      }

      up_bound ++;
    }


    if (right_bound >= left_bound) {

      for(let i = up_bound; i <= low_bound; i++) {
        res[i][right_bound] = ++cur;
      }

      right_bound--;
    }

    if (up_bound <= low_bound) {

      for(let i = right_bound;i >= left_bound;i--) {

        res[low_bound][i] = ++cur;
      }

      low_bound--;
    }


    if (right_bound >= left_bound) {

      for(let i = low_bound;i >= up_bound;i--) {
        res[i][left_bound] = ++cur;
      }

      left_bound++;
    }

  }

  console.log(222, res);

  return res;
};
// @lc code=end

