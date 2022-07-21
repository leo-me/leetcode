/*
 * @Author: leo-me leo.me0602@gmail.com
 * @Date: 2022-07-21 22:19:06
 * @LastEditors: leo-me leo.me0602@gmail.com
 * @LastEditTime: 2022-07-21 22:39:48
 * @FilePath: /leetcode/40.组合总和-ii.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    let track = [];
    if(candidates.length === 0) return res;
    let sortArr = candidates.sort((a,b) => a-b);
    backtrack(sortArr, 0, target, 0);

    function backtrack(candidates, start, target, sum) {

        if(sum === target) res.push([...track]);

        if(sum > target) return;

        for(let i = start; i < candidates.length; i++) {
            //
            if(i > start && candidates[i] === candidates[i-1]) {
                continue;
            };
            sum = sum + candidates[i];
            track.push(candidates[i]);
            backtrack(candidates, i+1, target, sum);
            track.pop();
            sum = sum - candidates[i];
        }

    }

    return res;
};
// @lc code=end

