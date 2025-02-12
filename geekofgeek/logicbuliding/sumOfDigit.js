/*
Given a number n, find the sum of its digits.

Examples : 

Input: n = 687
Output: 21
Explanation: The sum of its digits are: 6 + 8 + 7 = 21


Input: n = 12
Output: 3
Explanation: The sum of its digits are: 1 + 2 = 3
*/

function sumDigit(num){
    // console.log(String(num).split('')) 
    const arr = String(num).split('')
    let result = 0;
    for(let num of arr){
        result += Number(num)
    }
    return result;

}
console.log(sumDigit(687))
console.log(sumDigit(12))

function sumUsingReduce(num){
    return String(num).split('').reduce((sum, digit) => sum + Number(digit), 0)

}
console.log(sumUsingReduce(6871))

//now most effecient way to write the prgram no need to convert in string

function findSum(num){
    let sum=0;
    while(num>0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum


}
console.log(findSum(678))