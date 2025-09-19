/*
Given an array of integers arr[], the task is to move all the zeros to the end of the array 
while maintaining the relative order of all non-zero elements.

Examples: 

Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
Output: arr[] = [1, 2, 4, 3, 5, 0, 0, 0]
Explanation: There are three 0s that are moved to the end.


Input: arr[] = [10, 20, 30]
Output: arr[] = [10, 20, 30]
Explanation: No change in array as there are no 0s.

Input: arr[] = [0, 0]
Output: arr[] = [0, 0]
Explanation: No change in array as there are all 0s.
*/

//this code have multiple issue even though it solve the problem

function moveZero(arr){
    let count =0;
    for(let i=0;i<=arr.length;i++){
        if(arr[i] === 0){
            arr.splice(i,1)
            count++
        }

    }
    console.log(count);
    for(let i=0;i<count;i++){
        arr.push(0)
    }
    return arr;
}
console.log(moveZero([1, 2, 0, 4, 3, 0, 5, 0]))

//two pointer approach and it is optimal way and correct way of doing

function moveZeros(arr){
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !==0){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++
        }
    }
    return arr;

}

console.log('optimal two pointer',moveZeros([1, 2, 0, 4, 3, 0, 5, 0]))