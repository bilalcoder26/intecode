/*
Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

Note: If the second largest element does not exist, return -1.

Examples:

Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.


Input: arr[] = [10, 5, 10]
Output: 5
Explanation: The largest element of the array is 10 and the second largest element is 5.


Input: arr[] = [10, 10, 10]
Output: -1
Explanation: The largest element of the array is 10 there is no second largest element.
*/

//navie approach
function secondLargestNumber(arr){
    if(!arr.length) return 
    let n= arr.length;
    arr.sort((a,b) => a-b)
    // console.log(n-1, n-2);
    for(let i=n-2;i>=0;i--){
        if(arr[i] !== arr[n-1]){
            return arr[i];
        }
    }
    return -1
    
}
console.log(secondLargestNumber([12, 35, 1, 10, 34, 1]))
console.log(secondLargestNumber([10, 5, 10]))
console.log(secondLargestNumber([10, 10, 10]))

function getSecondLarget(arr){
    if(!arr.length) return
    let firstMaxNumber = -Infinity
    let secondMaxNumber = -Infinity
    for(let i=0;i<=arr.length;i++){
        if(arr[i] > firstMaxNumber){
            secondMaxNumber = firstMaxNumber;
            firstMaxNumber = arr[i]
        }
        else if(arr[i] < firstMaxNumber && arr[i] > secondMaxNumber){
            secondMaxNumber = arr[i]

        }
    }
    return secondMaxNumber

}
console.log(getSecondLarget([12, 35, 1, 10, 34, 1]))