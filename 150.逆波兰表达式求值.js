/*
 * @lc app=leetcode.cn id=150 lang=javascript
 * @lcpr version=30005
 *
 * [150] 逆波兰表达式求值
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let token of tokens) {
        if (token === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (token === '-') {
            let num1 = stack.pop();
            let num2 = stack.pop();
            stack.push(num2 - num1);
        } else if (token === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (token === '/') {
            let num1 = stack.pop();
            let num2 = stack.pop();
            stack.push(num2 / num1 | 0);
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
};
// @lc code=end



/*
// @lcpr case=start
// ["2","1","+","3","*"]\n
// @lcpr case=end

// @lcpr case=start
// ["4","13","5","/","+"]\n
// @lcpr case=end

// @lcpr case=start
// ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]\n
// @lcpr case=end

 */

