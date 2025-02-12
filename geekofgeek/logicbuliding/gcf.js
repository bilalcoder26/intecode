/*
Input: a = 20, b = 28
Output: 4
Explanation: The factors of 20 are 1, 2, 4, 5, 10 and 20. The factors of 28 are 1, 2, 4, 7, 14 and 28. 
\Among these factors, 1, 2 and 4 are the common factors of both 20 and 28. The greatest among the common factors is 4.


Input: a = 60, b = 36
Output: 12
*/

function findgcf(a,b){
    let min = Math.min(a,b);
    let gcf = 1
    for(let i=1;i<=min;i++){
        if(a%i ===0 && b%i ===0){
            gcf = i;
        }
       
    }
    return gcf

}

console.log(findgcf(20,28));

function findgcfrecursion(a,b){
    return b===0 ? a : findgcfrecursion(b,a%b)
}

console.log(findgcfrecursion(60,36))

function findgcfwhile(a,b){

    while(b!==0){
        let temp = b;
        b=a%b;
        a=temp

    }
    return a

}
console.log(findgcfwhile(20,28))