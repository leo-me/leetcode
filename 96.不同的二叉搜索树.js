/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // 也可以不fill 0 因为这一题不依赖从0 开始的项
    let memo = new Array(n+1).fill([]).map(() => new Array(n+1).fill(0));


    function count(low, high) {
        if(low > high) return 1;

        if(memo[low][high]) return memo[low][high];

        let res = 0;

        for(let mid = low; mid <= high; mid++) {
            let left = count(low, mid -1);
            let right = count(mid + 1, high);
            // 左右子树的组合乘积是BST的总数
            res = res + left*right;
        }

        memo[low][high] = res;
        return res;
    }

    return count(1, n);

};
// @lc code=end

