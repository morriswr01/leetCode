/**
 * @param {number[]} inorder
 * @param {number[]} preorder
 * @return {TreeNode}
 */

let _ = require('lodash');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function (preorder, inorder) {
    console.log(`${preorder} | ${inorder}`);
    if (inorder.length < 1 || preorder.length < 1) {
        return null;
    }
    let currentRootVal = preorder[0];
    let currentRoot = new TreeNode(currentRootVal);

    let leftInOrder = _.takeWhile(inorder, (i) => {
        return i != currentRootVal
    });
    let rightInOrder = _.takeRightWhile(inorder, (i) => {
        return i != currentRootVal
    });

    let leftpreOrder = preorder.splice(1, leftInOrder.length);
    let rightpreOrder = preorder.splice(1, rightInOrder.length);

    currentRoot.left = buildTree(leftpreOrder, leftInOrder);
    currentRoot.right = buildTree(rightpreOrder, rightInOrder);
    return currentRoot;

};

// console.log(buildTree([1,2,3], [2,3,1]))
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))