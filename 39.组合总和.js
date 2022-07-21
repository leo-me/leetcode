/*
 * @Author: leo-me leo.me0602@gmail.com
 * @Date: 2022-07-21 21:52:10
 * @LastEditors: leo-me leo.me0602@gmail.com
 * @LastEditTime: 2022-07-21 22:14:20
 * @FilePath: /leetcode/39.组合总和.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    let track = [];

    if(candidates.length === 0) return res;

    backtrack(candidates, 0, target, 0);

    function backtrack(candidates, start, target, sum) {
        if(sum === target) {
            res.push([...track]);
            console.log('track: ', track);
        }

        if(sum > target) return;

        for(let i = start; i < candidates.length; i++) {
            track.push(candidates[i]);
            sum = sum + candidates[i];
            backtrack(candidates, i, target, sum);
            sum = sum - candidates[i];
            track.pop();
        }
    }

    return res;
};




// @lc code=end

