//https://leetcode.com/problems/search-insert-position/description/?envType=problem-list-v2&envId=binary-search
/*
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 */

function searchInsert(arr, target){
    if(!Array.isArray(arr)) return [];
    let start =0;
    let end = arr.length-1;
    while(start <= end){
        let mid = Math.floor(start + (end-start)/2);
        if(arr[mid] == target){
            return mid;
        }else if(arr[mid] < target){
            start = mid +1
        }else{
            end = mid -1;
        }
    }
    return start;

}
let  nums = [1,3,5,6];
console.log(searchInsert(nums, 5))
console.log(searchInsert(nums, 2))
console.log(searchInsert(nums, 7))