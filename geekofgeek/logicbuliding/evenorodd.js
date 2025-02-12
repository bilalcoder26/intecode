// Check whether a given number is even or odd
// Given a number n, check whether it is even or odd. Return true for even and false for odd.

// Input: 2 
// Output: true


// Input: 5
// Output: false

function oddOrEven(num){
    if(typeof num  !== "number") return ;
    if(num === 1) return "1 is neither composite nor prime"
    return num % 2 === 0 

}
console.log(oddOrEven(2))
console.log(oddOrEven(5))
console.log(oddOrEven(1))
console.log(oddOrEven(0))