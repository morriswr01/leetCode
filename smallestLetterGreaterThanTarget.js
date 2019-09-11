var nextGreatestLetter = function (letters, target) {
    let left = 0;
    let right = letters.length - 1;
    if (target >= letters[letters.length-1]) {
        return letters[0];
    }
    
    while (left <= right) {
        const mid = Math.round((left + right) / 2);
        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return letters[left] > target
        ? letters[left]
        : letters[right];
};

console.log(nextGreatestLetter(["e", "e", "e", "k", "q", "q", "q", "v", "v", "y"], "q"));