/**
 *
 * NOTE: Feel free to add any extra member variables/functions you like.
 */
class RangeList {
    constructor() {
        this.list = [];
    }

    /**
     * Adds a range to the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    add(range) {
        if(!Array.isArray(range)) return;

        if(range.length !== 2) return;

        let start = range[0];
        let end = range[1];

        if(start > end) return;

        this.list = this.mergeInterval(range, this.list);
    }

    /**
     * merge interval
     * @param {Array<number>} range
     * @param {Array<Array>} list
     * @returns Array<Array>
     */
    mergeInterval(range, list) {
        let res = [];

        let sortArr = [...list, range].sort((a, b) => a[0] - b[0]);

        res.push(sortArr[0]);

        for(let i = 1; i < sortArr.length; i++) {
            let cur = sortArr[i];
            let last = res[res.length - 1];

            if(cur[0] <= last[1]) {
                last[1] = Math.max(last[1], cur[1])
            } else {
                res.push(cur);
            }
        }

       return res;
    }

    /**
     * Removes a range from the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    remove(range) {
        // TODO: implement this
        if(!Array.isArray(range)) return;

        if(range.length !== 2) return;

        if(range[0] >= range[1]) return;


        let res = [];
        let start = range[0];
        let end = range[1];


        for(let i= 0; i< this.list.length; i++) {
            let cur = this.list[i];
            let curStart = this.list[i][0];
            let curEnd = this.list[i][1];

            if(curEnd <= start || curStart >= end) {
                res.push(cur)
            } else if(curStart < start ) {
                res.push([curStart, start]);

                if(curEnd > end) {
                    res.push([end, curEnd]);
                }

            } else if(curEnd > end) {
                res.push([end, curEnd]);

                if(curStart < start ) {
                    res.push([curStart, start]);
                }

            }
        }

        this.list = res;
    }

    /**
     * Prints out the list of ranges in the range list
     */
    print() {
        let res = '';
        this.list.forEach(v => res +=`[${v[0]},${v[1]}) `);
        console.log(res);
    }


}
// Example run
const rl = new RangeList();
rl.add([1, 5]);
rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)