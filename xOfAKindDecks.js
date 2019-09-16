var _ = require('lodash');
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    // let sortedDeck = deck.sort((a, b) => { return a - b });
    let groupedByValue = _.groupBy(deck);
    let groupSizes = []

    // Find groups of size 1 and reject if found
    _.forEach(groupedByValue, (value) => {
        groupSizes.push(value.length);
    })

    let hcf = findGCFofList([...groupSizes, deck.length]);
    return (hcf !== 1);

};

function GCF(a, b) {
    if (b === 0) return a;
    else return GCF(b, a % b);
}

function findGCFofList(list) {
    return list.reduce(GCF);
}

// Check all group sizes are factors os deck.length
// let maxGroupSize = deck.length
// for (let i = 0; i < groupSizes.length; i++) {
//     const length = groupSizes[i];
//     console.log(`${maxGroupSize} ${length} ${maxGroupSize % length}`)
//     if(maxGroupSize % 2 === 0 && length % 2 === 0) continue;
//     if(maxGroupSize % (length/2) === 0) continue;
//     if (maxGroupSize % length !== 0) {
//         return false;
//     }
// }
// console.log(groupedByValue);
// console.log(groupSizes);
// return true;


// var hasGroupsSizeX = function(deck) {
//     // let sortedDeck = deck.sort((a, b) => { return a - b });
//     let groupedByValue = _.groupBy(deck);
//     let groupSizes = []

//     // Find groups of size 1 and reject if found
//     let groupsTooSmall = false;
//     _.forEach(groupedByValue, (value) => {
//         if (value.length <= 1) groupsTooSmall = true;
//         groupSizes.push(value.length);
//     })
//     if (groupsTooSmall) return false;

//     // Check all group sizes are factors os deck.length
//     let maxGroupSize = deck.length
//     for (let i = 0; i < groupSizes.length; i++) {
//         const length = groupSizes[i];
//         console.log(`${maxGroupSize} ${length} ${maxGroupSize % length}`)
//         if(maxGroupSize % 2 === 0 && length % 2 === 0) continue;
//         if(maxGroupSize % (length/2) === 0) continue;
//         if (maxGroupSize % length !== 0) {
//             return false;
//         }
//     }
//     console.log(groupedByValue);
//     console.log(groupSizes);
//     return true;
// };


console.log(hasGroupsSizeX([0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3]));