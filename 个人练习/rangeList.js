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
        // TODO: implement this
        if(!Array.isArray(range)) return;

        if(range.length !== 2) return;

        let start = range[0];
        let end = range[1];

        if(end > start) return;

        if(this.list.length === 0) {
            this.list.push(range);
            return;
        }

        this.list = this.merge(range, this.list);

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


        for(let i =0; i< this.list.length; i++) {
            let cur = this.list[i];
            if(cur[1] <= range[0] || cur[0] >= range[1]) {
                res.push(cur)
            } else if(cur[0] < range[0]) {
                res.push([cur[0], range[0]]);
            } else if(cur[1] > range[1]) {
                res.push([range[1], cur[1]]);
            }
        }

        this.list = res;

    }

    /**
     * Prints out the list of ranges in the range list
     */
    print() {
    // TODO: implement this
        this.list.forEach(v => console.log(`[${v[0]},${v[1]}) `));
    }


    merge(range, list) {
        let res = [];

        let sortArr = [...list, range].sort((a, b) => a[0] - b[0]);

        res.push(sortArr[0]);

        for(let i = 1; i < sortArr.length; i++) {
            let cur = this.list[i];
            let last = res[res.length - 1];

            if(cur[0] <= last[1]) {
                last[1] = Math.max(last[1], cur[1])
            } else {
                res.push(cur);
            }
        }

       return res;
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