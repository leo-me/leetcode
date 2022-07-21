/*
 * @Author: leo-me leo.me0602@gmail.com
 * @Date: 2022-07-21 23:08:13
 * @LastEditors: leo-me leo.me0602@gmail.com
 * @LastEditTime: 2022-07-21 23:26:15
 * @FilePath: /leetcode/47.全排列-ii.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    let track = [];
    let used = [];

    function backtrack(nums) {
        if(track.length === nums.length) {
            res.push([...track]);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if(used[i]) continue;

            if(i > 0 && nums[i] === nums[i-1] && !used[i-1]) {
                continue;
            }

            used[i] = true;
            track.push(nums[i]);
            backtrack(nums);
            track.pop();
            used[i] = false;
        }
    }

    let sortArr = nums.sort((a,b) => a-b);
    backtrack(sortArr)

    return res;

};
// @lc code=end

