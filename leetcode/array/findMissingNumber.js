function findMissingNumber(nums){
    if(!Array.isArray(nums) || nums.length === 0) return -1;
    let maxNum = nums[0];
    let minNum = nums[0];
    let actualSum =0;

    for(const num of nums){
        maxNum = Math.max(maxNum, num);
        minNum = Math.min(minNum, num);
        actualSum += num;

    }
    let n = maxNum -minNum + 1;
    let expectedSum = (n*(minNum+maxNum)/2);
    console.log('maxNum', maxNum , 'actual' , actualSum)

    return expectedSum - actualSum;
}

console.log(findMissingNumber([1,4,3,2,6,9,8,7]))