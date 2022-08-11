/*
 * @Author: leo-me leo.me0602@gmail.com
 * @Date: 2022-07-18 23:34:48
 * @LastEditors: leo-me leo.me0602@gmail.com
 * @LastEditTime: 2022-07-19 00:05:50
 * @FilePath: /.leetcode/15.三数之和.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let sortArr = nums.sort((a, b) => a-b);
    return nSum(sortArr, 3, 0, 0);

};

var nSum = function(nums, n, start, target) {
    let sz = nums.length;
    let res = [];
    if(n < 2 || sz < n) return res;

    if(n === 2) {
        let low = start, high = sz-1;
        while(low < high) {
            let sum = nums[low] + nums[high];
            let left = nums[low], right = nums[high];
            if(sum < target) {
                while(low < high && nums[low] === left) low++;
            } else if ( sum > target) {
                while(low < high && nums[high] === right) high--;
            } else {
                res.push([left, right]);
                while(low < high && nums[low] === left) low++;
                while(low < high && nums[high] === right) high--;
            }
        }

    } else {
        // n > 2 递归计算
        for(let i = start; i < sz; i++) {
            let sub = nSum(nums, n - 1, i+1, target - nums[i]);
            console.log('sub: ', sub);

            if(sub.length) {
                sub.forEach(s => res.push([...s, nums[i]]));
            }

            // 数字重复
            while (i < sz - 1 && nums[i] == nums[i + 1]) i++;
        }


    }
    return res;
}
// @lc code=end

