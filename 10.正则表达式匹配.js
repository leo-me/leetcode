/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode.cn/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (31.69%)
 * Likes:    3097
 * Dislikes: 0
 * Total Accepted:    296.1K
 * Total Submissions: 934.5K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 *
 *
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 *
 *
 * 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "aa", p = "a"
 * 输出：false
 * 解释："a" 无法匹配 "aa" 整个字符串。
 *
 *
 * 示例 2:
 *
 *
 * 输入：s = "aa", p = "a*"
 * 输出：true
 * 解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "ab", p = ".*"
 * 输出：true
 * 解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 20
 * 1 <= p.length <= 30
 * s 只包含从 a-z 的小写字母。
 * p 只包含从 a-z 的小写字母，以及字符 . 和 *。
 * 保证每次出现字符 * 时，前面都匹配到有效的字符
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let m = s.length, n = p.length;
    let memo = new Array(m).fill(-1).map(_ => new Array(n).fill(-1));
    console.log('memo: ', memo);

    return dp(s, 0, p, 0);

    function dp(s, i, p, j) {
        let m = s.length, n = p.length;

        if(j === n) return i === m;


        // s 走到头， p 还没有
        if (i == m) {
            // 如果能匹配空串，一定是字符和 * 成对儿出现
            if ((n - j) % 2 == 1) {
                return false;
            }
            // 检查是否为 x*y*z* 这种形式
            for (; j + 1 < n; j += 2) {
                if (p[j + 1] != '*') {
                    return false;
                }
            }
            return true;
        }

        if(memo[i][j] !== -1) return memo[i][j];


        let res = false;

        if(s[i] === p[j] || p[j] === '.') {
            if( j < n -1 && p[j+1] === '*') {
                res = dp(s, i, p, j+2) || dp(s, i+1, p, j);
            } else {
                res = dp(s, i+1, p , j+1);
            }

        } else {
            if(j < n -1 && p[j+1] === '*') {
                res = dp(s, i, p, j+2);
            } else {
                res = false;
            }
        }
        memo[i][j] = res;

        return res;
    }

};
// https://mp.weixin.qq.com/s/rnaFK05IcFWvNN1ppNf2ug
// @lc code=end

