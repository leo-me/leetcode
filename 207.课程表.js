/*
 * @lc app=leetcode.cn id=207 lang=javascript
 * @lcpr version=30100
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // 1. 初始化入度表和邻接表
    const inDegree = new Array(numCourses).fill(0);

    const map = {};
    
    for (let i = 0; i < numCourses; i++) {
        map[i] = [];
    }
    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;
        map[prerequisites[i][1]].push(prerequisites[i][0]);
    }

    // 2. 将入度为0的节点加入队列
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    // 3. 遍历队列，将入度为0的节点出队，并将其指向的节点的入度减1
    while (queue.length) {
        const node = queue.shift();
        numCourses--;
        for (let i = 0; i < map[node].length; i++) {
            inDegree[map[node][i]]--;
            if (inDegree[map[node][i]] === 0) queue.push(map[node][i]);
        }
    }

    // 4. 判断是否存在环
    return numCourses === 0;
};
// @lc code=end



/*
// @lcpr case=start
// 2\n[[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// 2\n[[1,0],[0,1]]\n
// @lcpr case=end

 */

