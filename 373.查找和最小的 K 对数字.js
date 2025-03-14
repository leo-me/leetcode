/*
 * @lc app=leetcode.cn id=373 lang=javascript
 * @lcpr version=30100
 *
 * [373] 查找和最小的 K 对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    class MinHeap {
        constructor(compare) {
            this.heap = [];
            this.compare = compare;
        }

        push(val) {
            this.heap.push(val);
            this.shiftUp(this.heap.length - 1);
        }

        pop() {
            const top = this.heap[0];
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();
            this.shiftDown(0);
            return top;
        }

        size() {
            return this.heap.length;
        }

        shiftUp(index) {
            let parent = (index - 1) >> 1;
            while (index && this.compare(this.heap[index], this.heap[parent])) {
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
                index = parent;
                parent = (index - 1) >> 1;
            }
        }

        shiftDown(index) {
            let left = (index << 1) + 1;
            let right = (index << 1) + 2;
            let minIndex = index;
            if (left < this.heap.length && this.compare(this.heap[left], this.heap[minIndex])) {
                minIndex = left;
            }
            if (right < this.heap.length && this.compare(this.heap[right], this.heap[minIndex])) {
                minIndex = right;
            }
            if (minIndex !== index) {
                [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
                this.shiftDown(minIndex);
            }
        }
    } 

    if (nums1.length === 0 || nums2.length === 0) {
        return [];
    }

    const res = [];
    const heap = new MinHeap((a, b) => nums1[a[0]] + nums2[a[1]] < nums1[b[0]] + nums2[b[1]]);

    for (let i = 0; i < nums1.length; i++) {
        heap.push([i, 0]);
    }

    while (k-- && heap.size()) {
        const [i, j] = heap.pop();
        
        res.push([nums1[i], nums2[j]]);

        if (j + 1 < nums2.length) {
            heap.push([i, j + 1]);
        }
    }

    return res;
    
};
// @lc code=end



/*
// @lcpr case=start
// [1,7,11]\n[2,4,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2]\n[1,2,3]\n2\n
// @lcpr case=end

 */

