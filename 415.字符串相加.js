/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // let m = num1.length, n = num2.length;
    // let i = m - 1;
    // let j = n - 1;

    // let res = new Array(Math.max(n,m)+1).fill(0);

    // while(i >= 0 && j >= 0) {
    //     let sum = Number(num1[i]) + Number(num2[j]);

    //     let p1 = Math.max(i, j);
    //     let p2 = p1 -1;

    //     res[p1] = res[p1] + sum % 10;
    //     console.log('sum: ', sum);

    //     if(p2 >= 0) {
    //         console.log('res[p2]: ', res[p2]);
    //         res[p2] = res[p2] + Math.floor(sum / 10);
    //         console.log('res[p2]: ', res[p2]);
    //     }

    //     i--;
    //     j--;
    // }

    // while(i >= 0) {
    //     res[i] = res[i] + Number(num1[i]);
    //     i--;
    // }

    // while(j >= 0) {
    //     res[j] = res[j] + Number(num2[j]);
    //     j--;
    // }


    // // let cursor = res.length -1;

    // // while(cursor >= 0 && res[cursor] === 0) {
    // //     res.pop();
    // // }


    // console.log(1111, res);

    // return res.join('');

    let i = num1.length - 1, j = num2.length - 1, add = 0;
    const ans = [];
    while (i >= 0 || j >= 0 || add != 0) {
        const x = i >= 0 ? num1[i] - 0 : 0;
        const y = j >= 0 ? num2[j] - 0 : 0;

        const result = x + y + add;

        ans.push(result % 10);

        add = Math.floor(result / 10);

        i--;
        j--;
    }

    return ans.reverse().join('');

};
// @lc code=end

