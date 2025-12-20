function printNaturalNum(n){
    if(n === 11 ) return
    //base case
    console.log(n)
    return printNaturalNum(n+1)
    
}
console.log(printNaturalNum(1))