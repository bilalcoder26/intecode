/*
Sequence 1, 4, 7,10 is an AP because the difference between any two consecutive terms in 
the series (common difference) is the same.


The difference between 2nd and 1st term 4 – 1 = 3
The difference between 3rd and 2nd term 7 – 4 = 3
The difference between 4th and 3rd term10 – 7 = 3
*/

/*
// Javascript program to check if a given array
// can form arithmetic progression
// Returns true if a permutation of arr[0..n-1]
// can form arithmetic progression
*/
function compare(a,b){
    if(a<b) return -1
    else if(a>b) return 1
    else return 0
}

function checkAP(arr){
    if(!arr.length) return
    if(arr.length === 1 ) return 1
    console.log(arr.sort(compare))
    arr.sort(compare)
    let diff = arr[1]- arr[0];
    for(let i=2;i<arr.length;i++){
        if(arr[i] -arr[i-1] != diff) return false
    }
    return true

}

console.log(checkAP([ 20, 15, 5, 0, 10 ]))