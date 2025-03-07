/*
 * @lc app=leetcode.cn id=149 lang=javascript
 * @lcpr version=30005
 *
 * [149] 直线上最多的点数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length < 3) return points.length;

    let max = 0;
    for (let i = 0; i < points.length; i++) {
        let map = new Map();
        let same = 0;
        let curMax = 0;
        for (let j = i + 1; j < points.length; j++) {
            let x = points[i][0] - points[j][0];
            let y = points[i][1] - points[j][1];
            if (x === 0 && y === 0) {
                same++;
                continue;
            }
            let gcd = getGcd(x, y);
            x /= gcd;
            y /= gcd;
            let key = `${x}/${y}`;
            let count = (map.get(key) || 0) + 1;
            map.set(key, count);
            curMax = Math.max(curMax, count);
        }
        // 1 is the point itself, same is the same points curmax is the max points on the same line
        max = Math.max(max, curMax + same + 1);
    }
    return max;

    function getGcd(a, b) {
        if (b === 0) return a;
        return getGcd(b, a % b);
    }
};
// @lc code=end



/*
// @lcpr case=start
// [[1,1],[2,2],[3,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]\n
// @lcpr case=end

 */

