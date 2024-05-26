/*
 * @Author: leo-me leo.me0602@gmail.com
 * @Date: 2024-05-26 15:09:41
 * @LastEditors: leo-me leo.me0602@gmail.com
 * @LastEditTime: 2024-05-26 17:05:04
 * @FilePath: /leetcode/120.三角形最小路径和.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const n = triangle.length;  // 获取三角形的层数
    // 创建一个二维数组 f，大小为 2 x n，用于存储计算的路径和
    const f = Array.from({ length: 2 }, () => Array(n).fill(0));
    f[0][0] = triangle[0][0];  // 初始化起点

    // 遍历每一层，从第二层开始
    for (let i = 1; i < n; i++) {
        const curr = i % 2, prev = 1 - i % 2;  // 当前层和前一层的索引
        f[curr][0] = f[prev][0] + triangle[i][0];  // 更新当前层的第一个元素

        // 遍历当前层的每一个元素，从第二个元素到倒数第二个元素
        for (let j = 1; j < i; j++) {
            // 选择从上层左边或上层正上方来的最小路径和，加上当前元素值
            f[curr][j] = Math.min(f[prev][j - 1], f[prev][j]) + triangle[i][j];
        }
        f[curr][i] = f[prev][i - 1] + triangle[i][i];  // 更新当前层的最后一个元素
    }

    // 返回最后一层中的最小路径和
    return Math.min(...f[(n - 1) % 2]);
};
// @lc code=end

