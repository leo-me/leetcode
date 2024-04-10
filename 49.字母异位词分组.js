/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 字符串编码
    function encode(str) {
        // let count = new Array(26).fill(0);

        // for(let c=0; c<str.length; c++) {
        //     let delta = str[c].charCodeAt() - 'a'.charCodeAt();
        //     count[delta]++;
        // }

        // return count.join('');
        return str.split('').sort().join('');
    }

    let map = new Map();

    for(let i = 0; i < strs.length; i++) {
        let code = encode(strs[i]);


        if(map.has(code)) {
            let v = map.get(code);
            v.push(strs[i]);

            map.set(code, v);
        } else {
            map.set(code, [strs[i]]);
        }
    }

    let res = [];


    console.log('map: ', map);


   map.forEach(v => {
        console.log('v: ', v);
        res.push(v)
    });
    console.log('res: ', res);

    return res;

};
// @lc code=end

