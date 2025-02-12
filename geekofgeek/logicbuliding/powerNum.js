/*
Given two positive numbers x and y, check if y is a power of x or not.
Examples : 


Input:  x = 10, y = 1
Output: True
x^0 = 1


Input:  x = 10, y = 1000
Output: True
x^3 = 1


Input:  x = 10, y = 1001
Output: False
*/
function isPower(x,y){
    if(x===1) return y ===1;
    let pow= 1;
    while(pow< y){
        pow = pow *x;
    }
    return (pow === y)

}

console.log(isPower(2,4))
console.log(isPower(10,100))
console.log(isPower(2,9))