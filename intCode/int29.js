//accenture
// write a function to find missing number in an array of consecutive integers

const array = [2,3,4,6,7]

//op --> 5

function missingNumber(arr){
    if(!arr.length) return
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
   for(let i=minNum;i<=maxNum;i++){
   
        if(!arr.includes(i)){
            return i
        }
   }
   return null

}

console.log(missingNumber(array)) // not a good way because using includes method which iterate over loops o(n2)


// optimal way for exactly one number is missing

function missingNumber2(arr){
    const n = arr.length + 1;
    
    const minNum = Math.min(...arr);
    const max = minNum + n-1;
    // console.log('max', max, minNum)
    const expectedSum = ((minNum + max) *n)/2;
    // console.log('exp', expectedSum)
    const actualSum = arr.reduce((sum,num)=> sum+ num,0);
    // console.log('act', actualSum)
    return expectedSum - actualSum
}

console.log('pp',missingNumber2(array))

//most optimalWay of doing using --> set

function missingNumber3(arr){
    if(!arr || !arr.length === 0) return null

    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
    const num = new Set(...arr);
    for(let i=minNum;i<=maxNum;i++){
        if(!num.has(i)){
            return i;
        }
    }
    return null;


}
console.log('using set method',missingNumber2(array))