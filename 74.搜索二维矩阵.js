/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length, n = matrix[0].length;
    // 把二维数组映射到一维
    var left = 0, right = m * n - 1;
    // 前文讲的标准的二分搜索框架
    while(left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if(get(matrix, mid) == target)
            return true;
        else if (get(matrix, mid) < target)
            left = mid + 1;
        else if (get(matrix, mid) > target)
            right = mid - 1;
    }
    return false;
};

// 通过一维坐标访问二维数组中的元素
var get = function(matrix, index) {
    var m = matrix.length, n = matrix[0].length;
    // 计算二维中的横纵坐标
    var i = Math.floor(index / n), j = index % n;
    return matrix[i][j];
};
// @lc code=end

