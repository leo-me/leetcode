/*
 * @lc app=leetcode.cn id=42 lang=javascript
 * @lcpr version=30005
 *
 * [42] 接雨水
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  // 初始化左右指针
  let left = 0, right = height.length - 1;
  // 初始化左右最大高度
  let left_max = 0, right_max = 0;
  // 初始化结果变量，用于累加雨水量
  let result = 0;
  
  // 当左指针小于右指针时，继续循环
  while (left < right) {
      // 如果左边的高度小于右边的高度
      if (height[left] < height[right]) {
          // 如果当前左边的高度大于等于左边最大高度
          if (height[left] >= left_max) {
              // 更新左边最大高度
              left_max = height[left];
          } else {
              // 否则，计算当前位置能接的雨水量，并累加到结果中
              result += left_max - height[left];
          }
          // 移动左指针向右
          left++;
      } else {
          // 如果右边的高度小于等于左边的高度
          // 如果当前右边的高度大于等于右边最大高度
          if (height[right] >= right_max) {
              // 更新右边最大高度
              right_max = height[right];
          } else {
              // 否则，计算当前位置能接的雨水量，并累加到结果中
              result += right_max - height[right];
          }
          // 移动右指针向左
          right--;
      }
  }
  
  // 返回最终计算的雨水量
  return result;
}
// @lc code=end



/*
// @lcpr case=start
// [0,1,0,2,1,0,1,3,2,1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,0,3,2,5]\n
// @lcpr case=end

 */

