var lowestCommonAncestor = function (root, p, q) {
    let LCA = null;
    var findlowestCommonAncestor = function (root, p, q) {
        if (!root) return false;
        // console.log(`${root.val} ${p.val}`)
        let currentNodeAncestor = (root.val == p.val || root.val == q.val);

        let left = lowestCommonAncestor(root.left, p, q);
        let right = lowestCommonAncestor(root.right, p, q);

        if (currentNodeAncestor + left + right >= 2) {
            LCA = root;
        }
    };
    LCA = findlowestCommonAncestor(root, p, q);
    return LCA;
}

// let smaller = root.left;
// let larger = root.right;
// if (root.left && root.right) {
//     if (root.left.val > root.right.val) {
//         smaller = root.right;
//         larger = root.left;
//     }
// }