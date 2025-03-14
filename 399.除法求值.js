/*
 * @lc app=leetcode.cn id=399 lang=javascript
 * @lcpr version=30100
 *
 * [399] 除法求值
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = {};
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        if (!graph[a]) graph[a] = {};
        if (!graph[b]) graph[b] = {};
        graph[a][b] = values[i];
        graph[b][a] = 1 / values[i];
    }

    const dfs = (a, b, visited) => {
        if (!graph[a] || !graph[b]) return -1;
        if (a === b) return 1;
        visited.add(a);
        for (const key in graph[a]) {
            if (visited.has(key)) continue;
            visited.add(key);
            const res = dfs(key, b, visited);
            if (res !== -1) return res * graph[a][key];
            visited.delete(key);
        }
        return -1;
    };

    const res = [];
    for (const [a, b] of queries) {
        res.push(dfs(a, b, new Set()));
    }
    return res;
    
};
// @lc code=end



/*
// @lcpr case=start
// [["a","b"],["b","c"]]\n[2.0,3.0]\n[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]\n
// @lcpr case=end

// @lcpr case=start
// [["a","b"],["b","c"],["bc","cd"]]\n[1.5,2.5,5.0]\n[["a","c"],["c","b"],["bc","cd"],["cd","bc"]]\n
// @lcpr case=end

// @lcpr case=start
// [["a","b"]]\n[0.5]\n[["a","b"],["b","a"],["a","c"],["x","y"]]\n
// @lcpr case=end

 */

