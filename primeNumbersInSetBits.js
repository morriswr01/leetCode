var countPrimeSetBits = function (L, R) {
    let count = 0;
    for (let i = L; i <= R; i++) {
        console.log(`${i} ${convertToBinary(i)}`);
        if (isBinaryPrime(convertToBinary(i))) count++;
    }
    return count;
};

var convertToBinary = function (num) {
    let binaryArray = [];
    currentVal = num;
    while (currentVal > 0) {
        binaryArray.push(currentVal % 2);
        currentVal = Math.floor(currentVal / 2);
    }
    return binaryArray.reverse();
}

var isBinaryPrime = function (binary) {
    const numberOfOnes = binary.reduce((reducer, bit) => reducer + bit);
    return isNumPrime(numberOfOnes);
}

var isNumPrime = function(numOfOnes) {
    if (numOfOnes == 1) return false;
    for (let i = 2; i < numOfOnes; i++) {
        if (numOfOnes % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(countPrimeSetBits(1, 1));