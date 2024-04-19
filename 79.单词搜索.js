/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let find = false;
  let m = board.length, n = board[0].length;

  function dfs(board, i, j, word, p) {

    if (p === word.length) {
      find = true;
      return;
    }

    if (find) return;


    if (i < 0 || j < 0 || i >= m || j >=n) return;

    if (board[i][j] !== word.charAt(p)) return;

    board[i][j] = '-' + board[i][j];

    dfs(board, i+1,j, word, p+1);
    dfs(board, i, j+1, word, p+1);
    dfs(board, i -1, j, word, p+1);
    dfs(board, i, j-1, word, p+1);

    board[i][j] = board[i][j].split('-')[1];
  }

  for(let i = 0; i< m; i++) {
    for(let j = 0; j < n; j++) {
      dfs(board, i, j, word, 0);
      if (find) {
        return true;
      }
    }
  }

  return false;

};
// @lc code=end

