/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return [leftBound(nums, target), rightBound(nums, target)];
};
var leftBound = function(nums, target) {
    let left = 0, right = nums.length -1;

    while(left <= right) {
        let mid = Math.floor((left + right) /2);
        if (nums[mid] < target) {
            // 搜索区间变为 [mid+1, right]
            left = mid + 1;
        } else if (nums[mid] > target) {
            // 搜索区间变为 [left, mid-1]
            right = mid - 1;
        } else if (nums[mid] === target) {
            // 收缩右侧边界
            right = mid - 1;
        }
    }
      // 检查出界情况
      if (left >= nums.length || nums[left] !== target) {
        return -1;
    }
    return left;
}

var rightBound = function(nums, target) {
    let left = 0, right = nums.length -1;

    while(left <= right) {
        let mid = Math.floor((left + right) /2);
        if (nums[mid] < target) {
            // 搜索区间变为 [mid+1, right]
            left = mid + 1;
        } else if (nums[mid] > target) {
            // 搜索区间变为 [left, mid-1]
            right = mid - 1;
        } else if (nums[mid] === target) {
            // 收缩右侧边界
            left = mid + 1;
        }
    }

    // 检查出界情况
    if (right < 0 || nums[right] !== target) {
        return -1;
    }
    return right;
}

// @lc code=end

