/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let left = newInterval[0];
  let right = newInterval[1];
  let placed = false;
  let res = [];

  for (let interval of intervals) {
    if (interval[0] > right) {
      // 在插入区间的右侧且无交集
      if (!placed) {
        res.push([left, right]);
        placed = true;
      }
      res.push(interval);
    } else if (interval[1] < left) {
      // 在插入区间的左侧且无交集
      res.push(interval);
    } else {
      // 与插入区间有交集，更新新区间的左右边界
      left = Math.min(left, interval[0]);
      right = Math.max(right, interval[1]);
    }
  }

  if (!placed) {
    // 插入新区间到末尾
    res.push([left, right]);
  }

  return res;
};

// @lc code=end

