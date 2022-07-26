function  generateTree(arr) {

    let stack = [];

    const findChid = function(i) {
        if(arr[i]) {stack.push(arr[i])};

        if(arr[i] === null) {
            stack.push(arr[i]);
            findChid(i+1);
        }

        if(arr[i*2 + 1]) {
            findChid(i*2 + 1);
        }
        if(arr[i*2 + 2]) {
            findChid(i*2 + 2);
        }

    }

    findChid(0);

    return stack;
}

let s = [3, null, 4,null,null, 1, 3];

let res =  generateTree(s);

console.log(res);