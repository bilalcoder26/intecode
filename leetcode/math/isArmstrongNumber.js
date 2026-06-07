function isArmstrongNumber(num){
    if(num<0) return false;
    let res =0;
    let copy = num;
     let digits = num === 0 ? 1 : Math.floor(Math.log10(num)) + 1;
    while(num>0){
        let d = num % 10;
        res = res + Math.pow(d,digits);
        num = Math.floor(num/10);
    }
    return copy === res;


}
console.log('isArmstrongNumber(153)', isArmstrongNumber(153))