//  NOT SOLVED

var kSmallestPairs = function(nums1, nums2, k) {
    let smallestKPairs = [];

    const smallestIthIndex;
    const nonSmallestIthIndex;
    
    let index = 0;
    while(smallestKPairs.length < k && (num1[i] || num2[i])) {
        smallestIthIndex = (nums1[i] < nums2[i]) ? nums1 : nums2;
        nonSmallestIthIndex = (nums1[i] < nums2[i]) ? nums2: nums1;

        index++;
    }
    for (let i = 0; i < k; i++) {
        // smallestKPairs.push([smallestZeroIndex, nonSmallestZeroIndex[i]]);
    };
    return smallestKPairs;
};

console.log(kSmallestPairs([1,7,11], [2,4,6], 3));