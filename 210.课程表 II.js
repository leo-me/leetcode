/*
 * @lc app=leetcode.cn id=210 lang=javascript
 * @lcpr version=30100
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    const map = {};
    for (let i = 0; i < numCourses; i++) {
        map[i] = [];
    }

    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;
        map[prerequisites[i][1]].push(prerequisites[i][0]);
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    const res = [];
    
    while (queue.length) {
        const node = queue.shift();
        res.push(node);
        numCourses--;
        for (let i = 0; i < map[node].length; i++) {
            inDegree[map[node][i]]--;
            if (inDegree[map[node][i]] === 0) queue.push(map[node][i]);
        }
    }

    return numCourses === 0 ? res : [];
    
};
// @lc code=end



/*
// @lcpr case=start
// 2\n[[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[[1,0],[2,0],[3,1],[3,2]]\n
// @lcpr case=end

// @lcpr case=start
// 1\n[]\n
// @lcpr case=end

 */

