//https://leetcode.com/problems/maximum-subarray/description/?envType=problem-list-v2&envId=array
/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/

function maxSubArr(nums){
    if(!Array.isArray(nums) || nums.length === 0) throw new console.error("invalid input");
    let maxSum = nums[0];
    let currentSum = nums[0];
    for(let i=1;i<nums.length;i++){
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
    
}
console.log('maxSubArr([-2,1,-3,4,-1,2,1,-5,4])', maxSubArr([-2,1,-3,4,-1,2,1,-5,4]))