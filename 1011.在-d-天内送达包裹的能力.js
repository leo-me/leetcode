/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    // 定义：当运载能力为 x 时，需要 f(x) 天运完所有货物
    // f(x) 随着 x 的增加单调递减
    function f(weights, x) {
        let days = 0;

        for(let i =0; i< weights.length;) {
            let cap = x;
            while(i < weights.length) {
                if(cap < weights[i]) {
                    break;
                } else {
                    cap = cap - weights[i];
                }
                i++;
            }
            days++;
        }

        return days;
    }

    let left = 0, right = 1;
    for(let i in weights) {
        // 比其中的任何一项都要大于等于
        left = Math.max(left, weights[i]);
        right += weights[i];
    }

    while(left < right) {
        let mid = Math.floor((left+right) /2);

        if(f(weights, mid) <= days) {
            right = mid;
        } else {
            left = mid +1;
        }
    }

    return left;
};
// @lc code=end

