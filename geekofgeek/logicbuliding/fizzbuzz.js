/*
Given an integer n, for every positive integer i <= n, the task is to print,

“FizzBuzz” if i is divisible by 3 and 5,
“Fizz” if i is divisible by 3,
“Buzz” if i is divisible by 5
“i” as a string, if none of the conditions are true.
*/
/*
Input: n = 3
Output: [“1”, “2”, “Fizz”]


Input: n = 10
Output: [“1”, “2”, “Fizz”, “4”, “Buzz”, “Fizz”, “7”, “8”, “Fizz”, “Buzz”]


Input: n = 20
Output: [“1”, “2”, “Fizz”, “4”, “Buzz”, “Fizz”, “7”, “8”, “Fizz”, “Buzz”, “11”, “Fizz”, “13”, “14”, “FizzBuzz”, 
“16”, “17”, “Fizz”, “19”, “Buzz”]
*/

function FizzBuzz(num){
    if(num < 0) return []
    let result =[];
    for(let i=1;i<=num;i++){
        if(i%3 === 0 && i%5===0){
            result.push('FizzBuzz');
        }else if(i % 5 === 0){
            result.push("Buzz");
        }else if(i%3 === 0){
            result.push('Fizz')
        }else{
            result.push(String(i))
        }
    } 
    return result;

}

console.log(FizzBuzz(3))
console.log(FizzBuzz(10))
console.log('20', FizzBuzz(20))