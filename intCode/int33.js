//asked in hcl
function countDigit(num){
   if (num === 0) return 1;

    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}
console.log('countDigit(1234567890)', countDigit(1234567891))