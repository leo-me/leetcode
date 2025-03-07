/*
 * @lc app=leetcode.cn id=133 lang=javascript
 * @lcpr version=30005
 *
 * [133] 克隆图
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
  if (!node) return null;

  const visited = new Map();

  const dfs = (node) => {
    if (visited.has(node.val)) return visited.get(node.val);

    const cloneNode = new _Node(node.val);
    visited.set(node.val, cloneNode);

    for (let neighbor of node.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }

    return cloneNode;
  };

  return dfs(node);
    
};
// @lc code=end



/*
// @lcpr case=start
// [[2,4],[1,3],[2,4],[1,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

