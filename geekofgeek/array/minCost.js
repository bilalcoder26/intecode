/*
Given an array of n integers. We need to reduce size of array to one. 
We are allowed to select a pair of integers and remove the larger one of these two. 
This decreases the array size by 1. Cost of this operation is equal to value of smallest one. 
Find out minimum sum of costs of operations needed to convert the array into a single element.

Examples: 

Input: 4 3 2 
Output: 4
Explanation: Choose (4, 2) so 4 is removed, new array = {2, 3}. Now choose (2, 3) so 3 is removed.  So total cost = 2 + 2 = 4

Input: 3 4
Output: 3
Explanation: choose 3, 4, so cost is 3. 
*/

function minCostToReduceArray(arr) {
    arr.sort((a, b) => a - b); // Step 1: Sort the array
    let totalCost = 0;
    console.log('sort',  arr.sort((a, b) => a - b))

    while (arr.length > 1) {
        console.log('index')
        let smallest = arr[0]; // Always pick the smallest element
        arr.shift(); // Remove the first (smallest) element

        totalCost += smallest; // Add cost
    }

    return totalCost;
}

// Test Cases
console.log(minCostToReduceArray([4, 3, 2]));