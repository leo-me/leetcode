/*
 * @lc app=leetcode.cn id=68 lang=javascript
 * @lcpr version=30005
 *
 * [68] 文本左右对齐
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let res = []; // 用于存储最终的结果
  let temp = []; // 用于临时存储当前行的单词
  let tempLen = 0; // 用于记录当前行单词的总长度
  for (let i = 0; i < words.length; i++) {
      // 检查当前单词是否可以加入当前行
      if (tempLen + temp.length + words[i].length <= maxWidth) {
          temp.push(words[i]); // 将单词加入当前行
          tempLen += words[i].length; // 更新当前行的总长度
      } else {
          // 计算需要分配的空格数
          let space = maxWidth - tempLen;
          // 计算平均每个间隔需要分配的空格数
          let avg = Math.floor(space / (temp.length - 1));
          // 计算剩余的空格数，需要分配给前面的间隔
          let mod = space % (temp.length - 1);
          let str = ''; // 用于构建当前行的字符串
          for (let j = 0; j < temp.length; j++) {
              str += temp[j]; // 添加单词
              if (j < temp.length - 1) {
                  // 添加空格，平均分配并处理剩余的空格
                  str += ' '.repeat(avg + (j < mod ? 1 : 0));
              }
          }
          // 将构建好的行加入结果数组，并补齐空格
          res.push(str + ' '.repeat(maxWidth - str.length));
          // 重置临时变量，开始新的一行
          temp = [words[i]];
          tempLen = words[i].length;
      }
  }
  // 处理最后一行，左对齐并补齐空格
  res.push(temp.join(' ') + ' '.repeat(maxWidth - tempLen - temp.length + 1));
  return res;
};
// @lc code=end



/*
// @lcpr case=start
// ["This", "is", "an", "example", "of", "text", "justification."]\n16\n
// @lcpr case=end

// @lcpr case=start
// ["What","must","be","acknowledgment","shall","be"]\n16\n
// @lcpr case=end

// @lcpr case=start
// ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we"\n20\n
// @lcpr case=end

 */

