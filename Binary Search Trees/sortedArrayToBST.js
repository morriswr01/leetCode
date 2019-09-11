function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;
        
    var half = Math.floor(nums.length / 2),
        root = new TreeNode(nums[half]);
        
    if(nums.slice(0, half).length > 0)
        root.left = sortedArrayToBST(nums.slice(0, half));
    if(nums.slice(half + 1).length > 0)
        root.right = sortedArrayToBST(nums.slice(half + 1));
        
    return root;
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));