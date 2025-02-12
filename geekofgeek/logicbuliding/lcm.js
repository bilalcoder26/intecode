/*
LCM of two numbers is the smallest number which can be divided by both numbers. 

Input :  a = 12, b = 18
Output :  36
36 is the smallest number divisible by both 12 and 18


Input :  a = 5, b = 11
Output :  55
55 is the smallest number divisible by both 5 and 11
*/

function gcf(a,b){
    return b === 0 ? a : gcf(b, a%b);
}
// console.log(gcf(15,20));

function lcm(a,b){
    return (a/gcf(a,b)) * b;
}

console.log(lcm(15,20))