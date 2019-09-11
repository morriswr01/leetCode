var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++){
        let array = matrix[i];
        if (binarySearch(array, target)) return true;
        // console.log(`${binarySearch(array, target)} ${array} ${target}`);
    }
    return false;
};

const binarySearch = function(array, target) {
    let left = 0;
    let right = array.length - 1;
    let midpoint = 0;
    
    while(left <= right) {
        midpoint = Math.ceil((right + left) / 2);
        if(array[midpoint] == target)
            return true;
        else {
            if(array[midpoint] < target)
                left = midpoint + 1
            else
                right = midpoint - 1
        }
        
    }
    
    return false;
};

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5));
// console.log(binarySearch([2,5,8,12,19], 5));