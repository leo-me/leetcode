/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    // 检查每一行
    for (let i = 0; i < 9; i++) {
      let row = [];
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== '.') {
          if (row.includes(board[i][j])) {
            return false;
          }
          row.push(board[i][j]);
        }
      }
    }
  
    // 检查每一列
    for (let j = 0; j < 9; j++) {
      let col = [];
      for (let i = 0; i < 9; i++) {
        if (board[i][j] !== '.') {
          if (col.includes(board[i][j])) {
            return false;
          }
          col.push(board[i][j]);
        }
      }
    }
  
    // 检查每一个3x3宫内
    for (let block = 0; block < 9; block++) {
      let blockValues = [];
      for (let i = Math.floor(block / 3) * 3; i < Math.floor(block / 3) * 3 + 3; i++) {
        for (let j = (block % 3) * 3; j < (block % 3) * 3 + 3; j++) {
          if (board[i][j] !== '.') {
            if (blockValues.includes(board[i][j])) {
              return false;
            }
            blockValues.push(board[i][j]);
          }
        }
      }
    }
  
    return true;
  }
  
//   var isValidSudoku = function(board) {
//     const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    
//     const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
    
//     const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
    
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             const c = board[i][j];
//             if (c !== '.') {
//                 const index = c.charCodeAt() - '0'.charCodeAt() - 1;
//                 rows[i][index]++;
//                 columns[j][index]++;
//                 subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
//                 if (rows[i][index] > 1 || columns[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
//                     return false;
//                 }
//             }
//         }
//     }
//     return true;
// };
// @lc code=end

