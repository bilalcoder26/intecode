//https://leetcode.com/problems/majority-element/?envType=problem-list-v2&envId=array
/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

function majorityElement(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return -1;
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > nums.length / 2) {
      return num;
    }
  }
  console.log("map --> ", map);

  return -1;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3,2,3]));

function  majorityElementBoyerMooreAlgo(nums){
        let count =0;
        let candidate =0;
        for(const num of  nums){
            if(count == 0){
                candidate = num;
            }
            if(num == candidate){
                count++;
            }else{
                count--;
            }

        }
        return candidate;
        }

        console.log('majorityElementBoyerMooreAlgo(3,2,3)', majorityElementBoyerMooreAlgo([3,2,3]))