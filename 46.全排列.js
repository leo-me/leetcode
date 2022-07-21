/*
 * @Author: leo-me leo.me0602@gmail.com
 * @Date: 2022-07-21 22:47:37
 * @LastEditors: leo-me leo.me0602@gmail.com
 * @LastEditTime: 2022-07-21 22:55:10
 * @FilePath: /leetcode/46.全排列.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let used = [];
    let res = [];
    let track = [];

    function backtrack(nums) {
        if(track.length === nums.length) {
            res.push([...track]);
        }

        for(let i = 0; i < nums.length; i++) {
            if(used[i]) {
                continue;
            };

            used[i] = true;
            track.push(nums[i]);
            backtrack(nums);
            track.pop();
            used[i] = false;
        }
    }

    backtrack(nums);
    return res;

};
// @lc code=end

