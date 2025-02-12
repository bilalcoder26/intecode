/*
Input : a = 1
        r = 0.5
        n = 10
Output : 1.99805

Input : a = 2
        r = 2
        n = 15
Output : 65534
 The series looks like this :- a, ar, ar2, ar3, ar4, . . .. 
Program for sum of geometric series
*/
function geometricSeries(a,r,n){
    let sum = 0;
    for(let i=0;i<n;i++){
        sum = sum + a
        a= a*r
    }
    return sum


}

console.log(geometricSeries(1,0.5,10));
console.log(geometricSeries(2,2,15));