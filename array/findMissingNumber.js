// [1,4,2,6,7,9] => [3,5,8]

function findMissingNumber(arr){
    let minNumber = Math.min(...arr)
    let maxNumber = Math.max(...arr)
    let numSet = new Set(arr);
    let result = [];
    // console.log(num)
    for(let i=minNumber;i<maxNumber;i++){
        if(!numSet.has(i)){
            result.push(i)

        }
    }
    return result;


}

console.log(findMissingNumber([1,4,2,6,7,9]))