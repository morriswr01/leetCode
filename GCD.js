function GCF(a, b) {
    if (b === 0) return a;
    else         return GCF(b, a % b);
}

function findGCFofList(list) {
    return list.reduce(GCF);
}

console.log(findGCFofList([ 48, 9, 6, 15, 6, 3, 3, 3, 3 ]));
console.log(findGCFofList([ 8, 3, 3, 2 ]));