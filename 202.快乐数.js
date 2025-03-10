/*
 * @lc app=leetcode.cn id=202 lang=javascript
 * @lcpr version=30100
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const getNext = (n) => {
        let sum = 0;
        while(n > 0) {
            let d = n % 10;
            n = Math.floor(n / 10);
            sum += d * d;
        }
        return sum;
    }

    let slow = n;
    let fast = getNext(n);
    while(fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
};
// @lc code=end



/*
// @lcpr case=start
// 19\n
// @lcpr case=end

// @lcpr case=start
// 2\n
// @lcpr case=end

 */

