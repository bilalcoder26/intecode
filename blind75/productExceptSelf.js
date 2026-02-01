/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of 
all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

function productOfSelfBrute(nums){
    let result =[];
    for(let i=0;i<nums.length;i++){
        let product =1;
        for(let j= 0;j<nums.length;j++){
            if(i != j){
            product = product*nums[j];

            }
        }
            result.push(product)

    }
    return result;

}

// console.log(productOfSelfBrute([1,2,3,4]))
// console.log(productOfSelfBrute([-1,1,0,-3,3]))

function productOfSelfOptimized(nums){
    const n = nums.length;
    const result = new Array(n).fill(1);

    let prefix =1;
    for(let i=0;i<n;i++){
        result[i] = prefix;
        prefix  *= nums[i]
    }
    let suffix =1;
    for(let i=n-1;i>=0;i--){
        result[i] = result[i]* suffix;
        suffix *= nums[i];
    }
    // console.log(result)
    return result


}
console.log(productOfSelfOptimized([1,2,3,4]))