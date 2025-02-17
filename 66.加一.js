/*
 * @lc app=leetcode.cn id=66 lang=javascript
 * @lcpr version=30005
 *
 * [66] 加一
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 从最后一位开始遍历
    for (let i = digits.length - 1; i >= 0; i--) {
      digits[i]++; // 当前位加一
      if (digits[i] < 10) {
          return digits; // 无进位，直接返回
      } else {
          digits[i] = 0; // 进位后当前位置为 0
      }
  }
  // 处理最高位进位（例如 999 → 1000）
  digits.unshift(1);
  return digits;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [4,3,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [9]\n
// @lcpr case=end

 */

