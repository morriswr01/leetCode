/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

let _ = require('lodash');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function (inorder, postorder) {
    if (inorder.length < 1 || postorder.length < 1) {
        return null;
    }
    let currentRootVal = postorder.slice(-1)[0];
    let currentRoot = new TreeNode(currentRootVal);

    let leftInOrder = _.takeWhile(inorder, (i) => {
        return i != currentRootVal
    });
    let rightInOrder = _.takeRightWhile(inorder, (i) => {
        return i != currentRootVal
    });

    let leftPostOrder = _.take(postorder, leftInOrder.length);
    let rightPostOrder = _.dropRight(_.takeRight(postorder, rightInOrder.length + 1), 1);

    currentRoot.left = buildTree(leftInOrder, leftPostOrder);
    currentRoot.right = buildTree(rightInOrder, rightPostOrder);

    return currentRoot;
    console.log(leftInOrder);
    console.log(rightInOrder);
    console.log(leftPostOrder);
    console.log(rightPostOrder);

};

// console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))
console.log(buildTree([1, 2, 3], [1, 3, 2]))