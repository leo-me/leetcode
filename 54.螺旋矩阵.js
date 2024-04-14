/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let row = matrix.length;

  let cow = matrix[0].length;

  let up_bound = 0, low_bound = row -1;

  let left_bound = 0, right_bound = cow - 1;

  let res = [];

  while (res.length < row * cow) {

    if ( up_bound <= low_bound) {
      for(let i = left_bound; i <= right_bound;i++) {
        res.push(matrix[up_bound][i]);
      }

      up_bound ++;
    }


    if (right_bound >= left_bound) {

      for(let i = up_bound; i <= low_bound; i++) {
        res.push(matrix[i][right_bound]);
      }

      right_bound--;
    }

    if (up_bound <= low_bound) {

      for(let i = right_bound;i >= left_bound;i--) {

        res.push(matrix[low_bound][i]);
      }

      low_bound--;
    }


    if (right_bound >= left_bound) {

      for(let i = low_bound;i >= up_bound;i--) {
        res.push(matrix[i][left_bound]);
      }

      left_bound++;
    }



  }

  
  return res;


};
// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码不保证正确性，仅供参考。如有疑惑，可以参照我写的 java 代码对比查看。

// var spiralOrder = function(matrix) {
//   var m = matrix.length, n = matrix[0].length;
//   var upper_bound = 0, lower_bound = m - 1;
//   var left_bound = 0, right_bound = n - 1;
//   var res = [];
//   // res.length == m * n 则遍历完整个数组
//   while (res.length < m * n) {
//       if (upper_bound <= lower_bound) {
//           // 在顶部从左向右遍历
//           for (var j = left_bound; j <= right_bound; j++) {
//               res.push(matrix[upper_bound][j]);
//           }
//           // 上边界下移
//           upper_bound++;
//       }
      
//       if (left_bound <= right_bound) {
//           // 在右侧从上向下遍历
//           for (var i = upper_bound; i <= lower_bound; i++) {
//               res.push(matrix[i][right_bound]);
//           }
//           // 右边界左移
//           right_bound--;
//       }
      
//       if (upper_bound <= lower_bound) {
//           // 在底部从右向左遍历
//           for (var j = right_bound; j >= left_bound; j--) {
//               res.push(matrix[lower_bound][j]);
//           }
//           // 下边界上移
//           lower_bound--;
//       }
      
//       if (left_bound <= right_bound) {
//           // 在左侧从下向上遍历
//           for (var i = lower_bound; i >= upper_bound; i--) {
//               res.push(matrix[i][left_bound]);
//           }
//           // 左边界右移
//           left_bound++;
//       }
//   }
//   return res;
// };

// @lc code=end

