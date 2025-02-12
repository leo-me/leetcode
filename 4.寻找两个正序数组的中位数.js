/*
 * @lc app=leetcode.cn id=4 lang=javascript
 * @lcpr version=30005
 *
 * [4] 寻找两个正序数组的中位数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const getKthElement = (k) => {
      let index1 = 0, index2 = 0;
      const m = nums1.length, n = nums2.length;
      
      while (true) {
          // 特殊情况处理
          if (index1 === m) {
              return nums2[index2 + k - 1]; // 如果 nums1 已经全部排除，直接返回 nums2 中的第 k 个元素
          }
          if (index2 === n) {
              return nums1[index1 + k - 1]; // 如果 nums2 已经全部排除，直接返回 nums1 中的第 k 个元素
          }
          if (k === 1) {
              return Math.min(nums1[index1], nums2[index2]); // 如果 k 为 1，返回两个数组当前最小的元素
          }

          // 正常情况
          const newIndex1 = Math.min(index1 + Math.floor(k / 2) - 1, m - 1); // 计算 nums1 的新索引
          const newIndex2 = Math.min(index2 + Math.floor(k / 2) - 1, n - 1); // 计算 nums2 的新索引
          const pivot1 = nums1[newIndex1], pivot2 = nums2[newIndex2]; // 获取两个数组的 pivot 值

          if (pivot1 <= pivot2) {
              k -= (newIndex1 - index1 + 1); // 调整 k 的值，排除 nums1 中较小的部分
              index1 = newIndex1 + 1; // 更新 nums1 的起始索引
          } else {
              k -= (newIndex2 - index2 + 1); // 调整 k 的值，排除 nums2 中较小的部分
              index2 = newIndex2 + 1; // 更新 nums2 的起始索引
          }
      }
  };

  const m = nums1.length;
  const n = nums2.length;

  const totalLength = m + n;
  
  if (totalLength % 2 === 1) {
      return getKthElement(Math.floor((totalLength + 1) / 2)); // 如果总长度为奇数，返回中间的那个数
  }
      
  return (getKthElement(Math.floor(totalLength / 2)) + getKthElement(Math.floor(totalLength / 2) + 1)) / 2; // 如果总长度为偶数，返回中间两个数的平均值
  
};
// @lc code=end



/*
// @lcpr case=start
// [1,3]\n[2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[3,4]\n
// @lcpr case=end

 */

