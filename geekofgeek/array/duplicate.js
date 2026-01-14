/*
Given a sorted array arr[] of size n, the goal is to rearrange the array so that all distinct elements appear 
at the beginning in sorted order. Additionally, return the length of this distinct sorted subarray.

Note: The elements after the distinct ones can be in any order and hold any value, as they don’t affect the result.

Examples: 

Input: arr[] = [2, 2, 2, 2, 2]
Output: [2]
Explanation: All the elements are 2, So only keep one instance of 2.


Input: arr[] = [1, 2, 2, 3, 4, 4, 4, 5, 5]
Output: [1, 2, 3, 4, 5]

Input: arr[] = [1, 2, 3]
Output: [1, 2, 3]
Explanation : No change as all elements are distinct.
*/

// this approach only work for sorted array

function removeDuplicate(arr){
    const n = arr.length;
    let result = [];
    if(!n) return [];
    for(let i=0;i<=n;i++){
        if(arr[i] !== arr[i+1]){
            result.push(arr[i]);
        }
    }
    return result
}

console.log(removeDuplicate([2, 2, 2, 2, 2]))
console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 4, 5, 5]))
console.log(removeDuplicate( [1, 2, 3,2,4,3]))
// console.log(removeDuplicate([1,3, 2, 6, 3, 4, 4, 6, 5, 5]))


function removeDuplicate2(arr){
    const num = new Set()
    for(let item of arr){
        // console.log(item)
        if(!num.has(item)){
            num.add(item)
        }
    }
    return [...num];
}

// console.log(removeDuplicate2([1,3, 2, 6, 3, 4, 4, 6, 5, 5]))