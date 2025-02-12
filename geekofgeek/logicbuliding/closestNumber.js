// Find the number closest to n and divisible by m
/*
Given two integers n and m (m != 0). Find the number closest to n and divisible by m. 
If there is more than one such number, then output the one having maximum absolute value.

Examples: 

Input: n = 13, m = 4
Output: 12
Explanation: 12 is the closest to 13, divisible by 4.


Input: n = -15, m = 6
Output: -18
Explanation: Both -12 and -18 are closest to -15, but-18 has the maximum absolute value.
*/

function closestNumber(n,m){
    if(n ===0 || m===0) return;
    return Math.floor(n / m) * m
    // console.log('ans', ans)

}

console.log(closestNumber(13, 4))
console.log(closestNumber(-15, 6))