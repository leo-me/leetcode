/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start

var WordDictionary = function() {
    this.doc = {};

};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if(this.doc[word]) return;

    this.doc[word] = true;

};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    console.log('word: ', word);
    if(this.doc[word]) return true;

    let find = false;

    Object.keys(this.doc).find(key => {
        let i= 0;
        for(i < word.length; i++;) {
            if(!(word[i] === '.' || word[i] === key[i])) {
                break;
            }
        }

        console.log('i', i, word[i], key[i]);

        if(i === word.length ) {
            find = true;
            return true;
        }
    });


    return find;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

