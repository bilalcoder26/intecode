
// https://leetcode.com/problems/rotate-array/?envType=problem-list-v2&envId=array
/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/
function rotateArray(nums,k){
    if(!Array.isArray(nums) || nums.length === 0) return [];
    let n = nums.length;
    k = k%n;
    reverseArray(nums, 0, n-1);
    reverseArray(nums, 0, k-1);
    reverseArray(nums, k, n-1);
    return nums;

}

function reverseArray(nums,i,j){
    while(i<=j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
}

console.log('rotatArray()', rotateArray([1,2,3,4,5,6,7],3))