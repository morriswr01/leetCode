function ListNode(val) {
    this.val = val;
    this.next = null;
}

var sortedListToBST = function (head) {
    const nums = getArray(head);
    const n = nums.length;
    if (n === 0) return null;
    let half = Math.floor(n / 2);
    let root = new TreeNode(nums[half]);

    if (nums.slice(0, half).length > 0)
        root.left = sortedListToBST(nums.slice(0, half));
    if(nums.slice(half + 1).length > 0)
        root.right = sortedListToBST(nums.slice(half + 1));

    return root;
}

const getArray = (head) => {
    let array = [head.val];
    while(head.next) {
        array.push(head.next.val);
    }
    return array;
}

console.log(sortedListToBST([]));