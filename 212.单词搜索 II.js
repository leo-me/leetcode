/*
 * @lc app=leetcode.cn id=212 lang=javascript
 * @lcpr version=30100
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class TrieNode {
  constructor() {
      this.children = new Map();
      this.isEnd = false;
  }
}

class Trie {
  constructor() {
      this.root = new TrieNode();
  }

  insert(word) {
      let node = this.root;
      for (const char of word) {
          if (!node.children.has(char)) {
              node.children.set(char, new TrieNode());
          }
          node = node.children.get(char);
      }
      node.isEnd = true;  

  }

}

var findWords = function(board, words) {

    const trie = new Trie();

    for (const word of words) {
        trie.insert(word);
    }


    const m = board.length;
    const n = board[0].length;
    const visited = new Array(m).fill([]).map(() => new Array(n).fill(false));

    
    const res = new Set();

    const dfs = (i, j, node, path) => {
        if (node.isEnd) {
            res.add(path);
        }

        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) {
            return;
        }

        const char = board[i][j];

        if (!node.children.has(char)) {
            return;
        }

        visited[i][j] = true;

        const nextNode = node.children.get(char);

        dfs(i + 1, j, nextNode, path + char);
        dfs(i - 1, j, nextNode, path + char);
        dfs(i, j + 1, nextNode, path + char);
        dfs(i, j - 1, nextNode, path + char);
        visited[i][j] = false;
    };


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, trie.root, '');
        }
    }
    
    return Array.from(res);
    
};
// @lc code=end



/*
// @lcpr case=start
// [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]\n["oath","pea","eat","rain"]\n
// @lcpr case=end

// @lcpr case=start
// [["a","b"],["c","d"]]\n["abcb"]\n
// @lcpr case=end

 */

