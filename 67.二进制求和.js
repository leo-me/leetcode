/*
 * @lc app=leetcode.cn id=67 lang=javascript
 * @lcpr version=30005
 *
 * [67] 二进制求和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // 从后往前遍历，进位标志
  let i = a.length - 1, j = b.length - 1, carry = 0;
  let result = '';
  // 任意一个字符串没遍历完或者有进位
  while (i >= 0 || j >= 0 || carry) {
      // 两个字符串对应位置相加，加上进位
      const sum = (+a[i] || 0) + (+b[j] || 0) + carry;
      // 当前位的值
      result += (sum % 2);
      // 进位
      carry = sum >= 2 ? 1 : 0;
      // 指针前移
      i--;
      j--;
  }
  return result;

};
// @lc code=end



/*
// @lcpr case=start
// "11"\n"1"\n
// @lcpr case=end

// @lcpr case=start
// "1010"\n"1011"\n
// @lcpr case=end

 */

