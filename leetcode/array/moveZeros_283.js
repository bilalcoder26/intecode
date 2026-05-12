/*
// https://leetcode.com/problems/move-zeroes/description/?envType=problem-list-v2&envId=array

/*
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 */

function moveZeros(nums){
    if(!Array.isArray(nums) || nums.length === 0) return [];
    let left =0;
    for(let right=0;right<nums.length;right++){
        if(nums[right] != 0){
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++
        }
    }
    return nums;
}
console.log('moveZeros([0,1,0,3,12])', moveZeros([0,1,0,3,12]))