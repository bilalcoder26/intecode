function printNaturalNum(n){
    if(n === 10 ) return
    //base case
    console.log(n)
    return printNaturalNum(n+1)
    
}
console.log(printNaturalNum(1))