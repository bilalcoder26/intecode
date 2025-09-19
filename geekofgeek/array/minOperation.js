/*
You are given an array of n-elements, you have to find the number of operations needed to 
make all elements of array equal. Where a single operation can increment an element by k. 
If it is not possible to make all elements equal print -1.

Example : 

Input : arr[] = {4, 7, 19, 16},  k = 3
Output : 10

Input : arr[] = {4, 4, 4, 4}, k = 3
Output : 0

Input : arr[] = {4, 2, 6, 8}, k = 3
Output : -1
*/

// need to check again

function minOperation(arr,k){
    let minNum = Math.min(...arr);
    let totalOperations = 0;
    for(const num of arr){
        let diff = num - minNum;
        if(diff % k !==0){
            return -1
        }
        totalOperations += diff/k;
    }
    return totalOperations;

}
console.log(minOperation([4,7,19,16], 3));