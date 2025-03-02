/*
Given an array of size n, the task is to check if it is sorted in ascending order or not. 
Equal values are allowed in an array and two consecutive equal values are considered sorted.

Examples: 

Input: arr[] = [20, 21, 45, 89, 89, 90]
Output: Yes

Input: arr[] = [20, 20, 45, 89, 89, 90]
Output: Yes

Input: arr[] = [20, 20, 78, 98, 99, 97]
Output: No
*/

function isSorted(arr){
    const n = arr.length;
    if(n ===0 || n===1) return 'Yes';
   for(let i=0;i<=n -1;i++){
    if(arr[i] > arr[i+1]){
        return "NO"

    }

   }
   return "yes"

}

console.log(isSorted([20, 21, 45, 89, 89, 90]))
console.log(isSorted([20, 20, 45, 89, 89, 90]))
console.log(isSorted([20, 20, 78, 98, 99, 97]))

function isSortedRecursive(arr, index=0){
    //base case
    if(index === arr.length-1) return "YES"
    if(arr[index] > arr[index + 1]) return "NO"
    return isSortedRecursive(arr, index+1);
}

console.log('r', isSortedRecursive([20, 21, 45, 89, 89, 90]))
console.log('r', isSortedRecursive([20, 20, 45, 89, 89, 90]))
console.log( 'r',isSortedRecursive([20, 20, 78, 98, 99, 97]))