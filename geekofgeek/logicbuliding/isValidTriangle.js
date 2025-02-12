/*
Given three sides, check whether triangle is valid or not. 
Examples: 
 

Input :  a = 7, b = 10, c = 5 
Output : Valid

Input : a = 1 b = 10 c = 12 
Output : Invalid
*/
/*
A triangle is valid if sum of its two sides is greater than the third side. 
If three sides are a, b and c, then three conditions should be met. 
*/

function isValidTraingle(a,b,c){
    let isValid = true;
    if((a+b> c) && (a+c > b) &&(b+c >  a)) {
        return isValid = true;

    }else{
        return isValid = false
    }


}
console.log(isValidTraingle(7,10,5))
console.log(isValidTraingle(1,10,12))