/*
A number is a perfect number if is equal to sum of its proper divisors, that is, 
sum of its positive divisors excluding the number itself. Write a function to check if a given number is perfect or not. 
Examples: 

Input: n = 15
Output: false
Divisors of 15 are 1, 3 and 5. Sum of 
divisors is 9 which is not equal to 15.
Input: n = 6
Output: true
Divisors of 6 are 1, 2 and 3. Sum of 
divisors is 6.
*/

function isperfectNumber(num){
    let divisorNumber = [];
    let isPerfect = false
    for(let i=1;i<num;i++){
        if(num % i === 0){
            divisorNumber.push(i);
        }
    }
    console.log(divisorNumber)
    if(divisorNumber.length > 1){
        sum = divisorNumber.reduce((sum,num)=>sum + num,0)
    return  isPerfect = sum === num
    }
    return isPerfect
    // console.log(sum)

}

// 6 is a perfect number
// 28 is a perfect number
// 496 is a perfect number
// 8128 is a perfect number

// console.log(isperfectNumber(15))
// console.log(isperfectNumber(6))
console.log(isperfectNumber(28))
// console.log(isperfectNumber(8128))
// console.log(isperfectNumber(496))


function isperfectNumber2(num){
    let sum =1;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i === 0){
            sum = sum +i;
            if(i !== num/i) {
                sum = sum + num/i
            }
        }
    }
    return sum === num;
}
console.log(isperfectNumber2(28))