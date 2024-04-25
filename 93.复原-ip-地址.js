/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let count = 4;

  let temp = new Array(4);

  let res = [];


  var dfs = (s, id, start) => {

    if (id === count) {

      if (start === s.length) res.push(temp.join('.'));

      return;
    }

    if (start === s.length) return;


    // 如果当前数字为0 ，此段ip地址就只能为0，继续遍历
    if (s.charAt(start) === '0') {
      temp[id] = 0;
      dfs(s, id +1 , start +1);
      return;
    }


    let addr = 0;

    for(let end = start; end < s.length; ++end) {

      addr = addr*10 + (s.charAt(end) - '0');

      if (addr > 0 && addr <= 255) {
        temp[id] = addr;
        dfs(s, id+1, end+1);
      } else {
        break;
      }
    }

  };

  dfs(s, 0 , 0);

  return res;
};
// @lc code=end

