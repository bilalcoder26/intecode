/*
Given an array arr[], the task is to find the top three largest distinct integers present in the array.

Note: If there are less than three distinct elements in the array, then return the available distinct numbers 
in descending order.

Examples :

Input: arr[] = [10, 4, 3, 50, 23, 90]
Output: [90, 50, 23]


Input: arr[] = [10, 9, 9]
Output: [10, 9]
There are only two distinct elements


Input: arr[] = [10, 10, 10]
Output: [10]
There is only one distinct element


Input: arr[] = []
Output: []
*/

function largestThreeDistinct(arr){
    let fst = -Infinity;
    let sec = -Infinity;
    let thrid = -Infinity;
    arr.forEach((x) => {
        if(x> fst){
            thrid = sec
            sec = fst
            fst =x
        }else if(x> sec && x!==fst ){
            thrid = sec
            sec = x
        }else if(x>thrid && x !== sec && x !== fst){
            x !== sec && x !== fst
        }
    })
    let res = [];
    if (fst !== -Infinity) res.push(fst);
    if (sec !== -Infinity) res.push(sec);
    if (thrid !== -Infinity) res.push(thrid);

    return res;

}
console.log(largestThreeDistinct([10, 4, 3, 50, 23, 90]))
console.log(largestThreeDistinct([10, 9, 9]))
console.log(largestThreeDistinct([10, 10, 10]))