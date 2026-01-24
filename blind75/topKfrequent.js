/*
Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Example 3:
Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
Output: [1,2]
*/

function topKfequent(nums,k){
    const map = new Map();
    for(const num of nums){
        map.set(num , ((map.get(num) ?? 0 ) + 1));

    }
    const bucket = Array.from({length: nums.length +1}, () => []);
    let result =[];
    for(const [num, freq] of map.entries()){
        bucket[freq].push(num);
       
    }
    for(let i=bucket.length-1;i>=0 && result.length <k;i--){
        for(const num of bucket[i]){
            result.push(num)
            if(result.length === k) break;
        }

    }

    return result;
   



}

console.log(topKfequent([1,1,1,2,2,3],2))
console.log(topKfequent([1],1))
console.log(topKfequent([1,2,1,2,1,2,3,1,3,2],2))