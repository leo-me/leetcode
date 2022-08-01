/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    // 单调栈
    const visited = new Array(26).fill(0);
    const count = _.countBy(s);
    const stack = new Array();

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (!visited[ch.charCodeAt() - 'a'.charCodeAt()]) {
            //栈顶字母比当前字母大
            while (stack.length > 0 && stack[stack.length - 1] > ch) {
                // 后面还有当前栈顶字母
                if (count[stack[stack.length - 1]] > 0) {
                    // 出栈 恢复未访问
                    visited[stack[stack.length - 1].charCodeAt() - 'a'.charCodeAt()] = 0;
                    stack.pop();
                } else {
                    break;
                }
            }
            visited[ch.charCodeAt() - 'a'.charCodeAt()] = 1;
            stack.push(ch);
        }

        count[ch]--;
    }
    return stack.join('');
};
// @lc code=end

