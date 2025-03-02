/*
Given an array arr. The task is to find the largest element in the given array. 

Examples: 

Input: arr[] = [10, 20, 4]
Output: 20
Explanation: Among 10, 20 and 4, 20 is the largest. 


Input: arr[] = [20, 10, 20, 4, 100]
Output: 100
*/

function largestNumber(arr){
    if(!arr.length) return
    let maxNumber = arr[0]
    for(let i=1;i<=arr.length;i++){
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        }
    }
    return maxNumber;

}

console.log(largestNumber([10, 20, 4]))
console.log(largestNumber([20, 10, 20, 4, 100]))