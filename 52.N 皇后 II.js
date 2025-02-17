/*
 * @lc app=leetcode.cn id=52 lang=javascript
 * @lcpr version=30005
 *
 * [52] N 皇后 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let count = 0;
  // 记录已占用的列、主对角线、副对角线
  const cols = new Set();         // 列
  const mainDiagonals = new Set(); // 主对角线（左上到右下）
  const antiDiagonals = new Set(); // 副对角线（右上到左下）

  // 回溯函数：逐行尝试放置皇后
  const backtrack = (row) => {
      if (row === n) {
          count++; // 找到一个合法解
          return;
      }
      // 遍历当前行的每一列
      for (let col = 0; col < n; col++) {
          // 计算主对角线和副对角线的唯一标识
          const mainDiag = row - col; // 主对角线：差值相同
          const antiDiag = row + col; // 副对角线：和相同

          // 如果当前位置冲突，跳过
          if (cols.has(col) || mainDiagonals.has(mainDiag) || antiDiagonals.has(antiDiag)) {
              continue;
          }

          // 放置皇后，记录状态
          cols.add(col);
          mainDiagonals.add(mainDiag);
          antiDiagonals.add(antiDiag);

          // 递归处理下一行
          backtrack(row + 1);

          // 回溯，撤销当前状态
          cols.delete(col);
          mainDiagonals.delete(mainDiag);
          antiDiagonals.delete(antiDiag);
      }
  };

  backtrack(0); // 从第 0 行开始
  return count;
};
// @lc code=end



/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

