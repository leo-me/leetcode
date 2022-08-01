/*
 * @lc app=leetcode.cn id=1024 lang=javascript
 *
 * [1024] 视频拼接
 */

// @lc code=start
/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
    if(time === 0) return 0;

    clips.sort((a,b) => {
        // 起点相同 升序排列
        if(a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    // 记录选择的短视频个数
    let res = 0;

    let curEnd = 0, nextEnd = 0;
    let i = 0, n = clips.length;

    while(i < n && clips[i][0] <= curEnd) {
        // 在第res个视频的区间贪心选择下一个视频
        while(i < n && clips[i][0] <= curEnd) {
            nextEnd = Math.max(nextEnd, clips[i][1]);
            i++;
        }

        // 找到下一个视频，更新curEnd
        res++;
        curEnd = nextEnd;
        if(curEnd >= time) {
            // 已经可以拼出区间 [0，T]
            return res;
        }
    }

    // 无法连续拼出区间 [0, T]
    return -1;
};
// @lc code=end

