/*
 * @lc app=leetcode.cn id=127 lang=javascript
 * @lcpr version=30005
 *
 * [127] 单词接龙
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0;
    }

    let queue = [[beginWord, 1]];
    while (queue.length) {
        let [word, level] = queue.shift();
        if (word === endWord) {
            return level;
        }

        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < 26; j++) {
                let newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }

    return 0;
};
// @lc code=end



/*
// @lcpr case=start
// "hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]\n
// @lcpr case=end

// @lcpr case=start
// "hit"\n"cog"\n["hot","dot","dog","lot","log"]\n
// @lcpr case=end

 */

