/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function (A, B) {
    let sortedA = A.sort((a, b) => { return a - b });
    let optimalA = [];
    // console.log(`Sorted Array: ${sortedA}`);
    for (let i = 0; i < B.length; i++) {
        let found = false;
        for (let j = 0; j < sortedA.length; j++) {
            // console.log(`${i} ${j}`)
            if (sortedA[j] > B[i]) {
                optimalA.push(sortedA[j]);
                // console.log(`${sortedA[j]} is optimal to ${B[i]}`);
                sortedA.splice(j, 1);
                found = true;
                break;
            }
        }
        if(!found) optimalA.push(null);
    }

    // Find unused elements in sortedA A-sortedA
    if (sortedA.length !== 0) {
        optimalA = optimalA.map((elem) => {
            console.log(sortedA.length)
            if (!elem)
                return sortedA.pop();
            else 
                return elem
        })
    }
    // Fill in nulls
    return optimalA;
};

console.log(advantageCount([2, 7, 11, 15], [1, 10, 164, 11]))



