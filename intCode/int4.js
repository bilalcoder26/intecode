// remove duplicates from an array [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9] => [1,2,3,4,5,6,7,8,9];
//synchoronus company gurgoan
function removeDuplicates(arr){
    if(!arr || arr.length === 0) return;
    
    let uniqueNum = {};
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(!uniqueNum[arr[i]]){
            uniqueNum[arr[i]] =1;
            result.push(arr[i]);
        }
    }
    // console.log(uniqueNum)

    return result;
}
console.log(removeDuplicates([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9])); // [1,2,3,4,5,6,7,8,9]