/*
 * @lc app=leetcode.cn id=2070 lang=javascript
 * @lcpr version=30100
 *
 * [2070] 每一个查询的最大美丽值
 */

// @lc code=start
/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
    items.sort((a,b) => a[0] - b[0]);

    const maxBeauty = [];

    let currentMax = 0;


    for(let i =0; i < items.length; i++) {
      currentMax = Math.max(currentMax, items[i][1]);
      maxBeauty[i] = currentMax;
    }

    const res = [];

    for (let q of queries) {
      let left = 0, right = items.length - 1;

      let bestIndex = -1;

      while(left <= right) {
        const mid = Math.floor((left+right) / 2);

        if (items[mid][0] <= q) {
          bestIndex = mid;
          left = mid +1;
        } else {
          right = mid -1;
        }
      }

      if (bestIndex === -1) {
        res.push(0);
      } else {
        res.push(maxBeauty[bestIndex]);
      }
    }

    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [[1,2],[3,2],[2,4],[5,6],[3,5]]\n[1,2,3,4,5,6]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[1,2],[1,3],[1,4]]\n[1]\n
// @lcpr case=end

// @lcpr case=start
// [[10,1000]]\n[5]\n
// @lcpr case=end

 */

