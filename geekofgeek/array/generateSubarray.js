/*
Given an array arr[], the task is to generate all the possible subarrays of the given array.

Examples: 

Input: arr[] = [1, 2, 3]
Output: [ [1], [1, 2], [2], [1, 2, 3], [2, 3], [3] ]

Input: arr[] = [1, 2]
Output: [ [1], [1, 2], [2] ]
*/

function generateSubarray(arr){
    let result =[];
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            result.push(arr.slice(i,j+1))
        }
    }
    return result;

}
console.log(generateSubarray([1, 2, 3]))

function generateSubarrayOptimal(arr){
    let result = [];
    arr.forEach((_, index) =>{
        let subarray = [];
        for(i=index;i<arr.length;i++){
            subarray.push(arr[i])
            result.push([...subarray])
        }
    })
    return result
}

console.log('generateSubarrayOptimal(arr)', generateSubarrayOptimal([1,2]))