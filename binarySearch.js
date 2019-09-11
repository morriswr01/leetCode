var search = function(nums, target) {
    // return binSearch(nums, target, 0, nums.length-1);
    let left = 0;
    let right = nums.length - 1;
    let midpoint = 0;
    
    while(left <= right) {
        console.log(`${left} ${right}`);
        midpoint = Math.ceil((right + left) / 2);
        if(nums[midpoint] == target)
            return midpoint;
        else {
            if(nums[midpoint] < target)
                left = midpoint + 1
            else
                right = midpoint - 1
        }
        
    }
    
    return -1;
};

console.log(search ( [-1,0,3,5,9,12], 9));