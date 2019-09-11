var isSubtree = function (s, t, foundSubTreeStart = false) {
    if (!s && !t) return true;
    if ((!s ^ !t)) return false;
    if (s.val == t.val) {
        if (isSubtree(s.left, t.left, true) && isSubtree(s.right, t.right, true)) return true;
    }
    else if(s.val !== t.val && foundSubTreeStart == true) return false;

    return isSubtree(s.left, t) || isSubtree(s.right, t);
}