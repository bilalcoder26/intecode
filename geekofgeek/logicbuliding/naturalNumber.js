// Program to find sum of first n natural numbers
/*
Given a number n, find the sum of the first natural numbers.

Examples : 

Input: n = 3
Output: 6
Explanation: Note that 1 + 2 + 3 = 6

Input  : 5
Output : 15 
Explanation : Note that 1 + 2 + 3 + 4 + 5 = 15
*/

function naturalNumber(num){
    if(typeof num  !== "number") return ;
    let result = 0;
    for(let i=1;i<=num;i++){
        result += i
    }
    return result

}
console.log(naturalNumber(3))
console.log(naturalNumber(5))

// more optimized way of writing natural number use formala n*(n+1)/2

function naturalNumber2(num){
    if (typeof num !== "number" || num < 1) return;
    return (num *(num + 1))/2

}
console.log('o', naturalNumber2(3))
console.log('o', naturalNumber2(5))