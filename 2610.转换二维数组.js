/*
 * @lc app=leetcode.cn id=2610 lang=javascript
 * @lcpr version=30100
 *
 * [2610] 转换二维数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let map = new Map();
    let res = [];


    nums.forEach((v) => {
      map.set(v, (map.get(v) || 0) +1);

    });

    map.forEach((value, key) => {
      for(let i = 0; i < value; i++) {
        if (!res[i]) {
          res[i] = [];
        }
        
        res[i].push(key);
      }
    });

    return res;
}
// @lc code=end
// @lc code=end



/*
// @lcpr case=start
// [1,3,4,1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

 */

