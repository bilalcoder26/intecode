/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3
*/

function longestConsecutiveSequenceBrute(nums) {
  if (!nums || nums.length === 0) return [];
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let count = 1;
    while (nums.includes(current + 1)) {
      current++;
      count++;
    }
    longest = Math.max(longest, count);
  }
  return longest;
}
console.log(longestConsecutiveSequenceBrute([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSequenceBrute([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutiveSequenceBrute([1, 0, 1, 2]));

function longestConsecutiveSequenceOptimized(nums) {
  if (!nums || nums.length === 0) return [];
  const numSet = new Set(nums);
  let longest = 0;
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let count = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        count++;
      }
      longest = Math.max(longest, count);
    }
  }
  return longest;
}
console.log(
  "optimized",
  longestConsecutiveSequenceOptimized([100, 4, 200, 1, 3, 2]),
);
console.log(
  "optimized",
  longestConsecutiveSequenceOptimized([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]),
);
console.log("optimized", longestConsecutiveSequenceOptimized([1, 0, 1, 2]));
