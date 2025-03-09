/*
 * @lc app=leetcode.cn id=211 lang=javascript
 * @lcpr version=30005
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var TrieNode = function() {
    this.children = {};
    this.isEnd = false;
};

var WordDictionary = function() {
    this.root = new TrieNode();

};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  for (const char of word) {
      if (!node.children[char]) {
          node.children[char] = new TrieNode(); // 创建新节点
      }
      node = node.children[char]; // 移动到子节点
  }
  node.isEnd = true; // 标记单词结尾

};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return searchNode(word, 0, this.root);
};

function searchNode(word, index, node) {  
  if (index === word.length) {
    return node.isEnd; // 如果到达单词末尾，返回是否是一个单词的结尾
}

const char = word[index];
if (char === '.') {
    // 如果是通配符，递归检查所有子节点
    for (const key in node.children) {
        if (searchNode(word, index + 1, node.children[key])) {
            return true;
        }
    }
    return false;
} else {
    // 如果不是通配符，检查当前字符是否在子节点中
    if (!node.children[char]) {
        return false;
    }
    return searchNode(word, index + 1, node.children[char]);
}
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end



/*
// @lcpr case=start
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"][[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]\n
// @lcpr case=end

 */

