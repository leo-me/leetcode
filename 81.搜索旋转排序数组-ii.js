/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
    
  while (left <= right) { // 使用二分搜索，左右边界相等时仍然需要搜索
    let mid = Math.floor((left + right) / 2); // 计算中间索引
    
    if (nums[mid] === target) { // 如果中间元素是目标值，则返回 true
        return true;
    }
    
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) { // 处理重复元素的情况
        left++; // 如果左、中、右三个元素相等，则移动左指针，同时移动右指针
        right--;
    } else if (nums[left] <= nums[mid]) { // 如果左半边是有序的
        if (nums[left] <= target && target < nums[mid]) { // 如果目标值在左半边有序范围内
            right = mid - 1; // 移动右边界到中间元素的左边
        } else {
            left = mid + 1; // 否则，移动左边界到中间元素的右边
        }
    } else { // 如果右半边是有序的
        if (nums[mid] < target && target <= nums[right]) { // 如果目标值在右半边有序范围内
            left = mid + 1; // 移动左边界到中间元素的右边
        } else {
            right = mid - 1; // 否则，移动右边界到中间元素的左边
        }
    }
  }
    
    return false; // 如果循环结束仍然没有找到目标值，则返回 false

};
// @lc code=end

