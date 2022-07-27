function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


function  generateTree(arr) {

    let head = new TreeNode(arr[0]);

    const findChid = function(i, head) {


        if(arr[i*2 + 1]) {
            head.left = new TreeNode(arr[i*2 + 1]);
            findChid(i*2 + 1, head.left);
        }
        if(arr[i*2 + 2]) {
            head.right = new TreeNode(arr[i*2 + 2]);
            findChid(i*2 + 2, head.right);
        }

    }

    findChid(0, head);

    return head;
}

let s = [3, null, 4,null,null, 1, 3];

let res =  generateTree(s);

console.log(res);